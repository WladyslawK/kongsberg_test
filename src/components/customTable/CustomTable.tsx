import React, {useEffect, useState} from 'react'

//mui imports
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow} from '@mui/material'

//hooks import
import {useAppSelector} from "hooks/reduxHooks"

//components import
import {TableBodySkeleton} from "components/tableBodySkeleton/TableBodySkeleton"
import {MobileViewTableCells} from "components/customTable/mobileViewTableCells/MobileViewTableCells"

//react-router-dom imports
import {useNavigate} from "react-router-dom"

//constants vs utils function imports
import {PATH} from "constants/routePaths.enum"
import {APP_STATUS, charactersTableHead} from "constants/constants"
import {capitalizeFirstLetter} from "utils/utils"

// types imports
import {CharacterDomainType} from "api/characters-api"
import {AppStatusType} from "app/appSlice"

//styles import
import s from 'components/customTable/CustomTable.module.css'



export const CustomTable = () => {

  const rows = useAppSelector<CharacterDomainType[]>(state => state.allCharacters.characters)
  const appStatus = useAppSelector<AppStatusType>(state => state.app.status)
  const navigate = useNavigate()

  const [mobileView, setMobileView] = useState(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showButton);
    showButton();
  }, []);

  const openCharacterInfoHandler = (id: number) => {
    navigate(`${PATH.CHARACTER_INFO}/${id}`)
  }

  const head = charactersTableHead.map((item, i) => <TableCell key={i} align={i === 0 ? "left" : 'right'}><span
    className={s.table_head_item}>{item}</span></TableCell>)

  const body = rows.map(({name, status, species, url, id, location}) => (
    <TableRow className={s.row}
      key={id}
      sx={{'&:last-child td, &:last-child th': {border: 0}}}
      onClick={() => openCharacterInfoHandler(id)}
    >
      <TableCell component="th" scope="row">{name}</TableCell>
      <TableCell align="right">{capitalizeFirstLetter(status)}</TableCell>
      <TableCell align="right">{capitalizeFirstLetter(species)}</TableCell>
      <TableCell align="right">
        <span>{location.name}</span>
      </TableCell>
    </TableRow>
  ))

  return (
    <>
      {
        mobileView ?
          <MobileViewTableCells/> :
          <div className={s.table_container}>
            <TableContainer component={Paper}>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                  <TableRow className={s.table_head}>
                    {
                      head
                    }
                  </TableRow>
                </TableHead>
                {
                  appStatus === APP_STATUS.LOADING ?
                    <TableBodySkeleton columnsCount={4} rowsCount={20}/> :
                    <TableBody>
                      {body}
                    </TableBody>
                }
              </Table>
            </TableContainer>
          </div>
      }
    </>
  )
}