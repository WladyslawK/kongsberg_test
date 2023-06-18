//redux/toolkit import
import {Dispatch} from "@reduxjs/toolkit"

//type import
import {ErrorResponse} from "api/characters-api"
import {APP_STATUS} from "constants/constants"

//action creators imports
import {setAppErrorAC, setAppStatusAC} from "app/appSlice"

export const handleServerAppError = (data: ErrorResponse, dispatch: Dispatch) => {
  if(data.response.data.error){
    dispatch(setAppErrorAC({error: data.response.data.error}))
  }else {
    dispatch(setAppErrorAC({error: 'some error'}))
  }
  dispatch(setAppStatusAC({status: APP_STATUS.FAILED}))
}

export const capitalizeFirstLetter =(word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const searchParamsSetHelper = ({name, status, species}: {name: string, status: string, species: string}, searchParams: URLSearchParams, setSearchParams: (searchParams: URLSearchParams) => void, ) => {
  //set data into url (status params)
  if (status) {
    searchParams.set('status', status)
    setSearchParams(searchParams)
  } else {
    searchParams.delete('status')
    setSearchParams(searchParams)
  }

  //set data into url (species params)
  if (species) {
    searchParams.set('species', species)
    setSearchParams(searchParams)
  } else {
    searchParams.delete('species')
    setSearchParams(searchParams)
  }

  //set data into url (name params)
  if (name) {
    searchParams.set('name', name)
    setSearchParams(searchParams)
  } else {
    searchParams.delete('name')
    setSearchParams(searchParams)
  }
}