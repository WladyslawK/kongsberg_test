import {BreadcrumpType} from "../components/breadcrump/Breadcrump";

export const menuItems = ['all characters']
export const charactersTableHead = ['Name', 'Status', 'Species', 'Origin']

export const speciesFilter = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological Creature', 'Unknown', 'Animal', 'Robot', 'Cronenberg']

export const statusFilter = ['Alive', 'Dead', 'Unknown']

export const CLICK_AWAY = 'clickaway'

export enum APP_STATUS {
  LOADING = 'loading',
  IDLE = 'idle',
  FAILED = 'failed'

}

export const NAVIGATION: BreadcrumpType[] = [
  {
    id: 1,
    title: "HOME",
    link: "/",
  }, {
    id: 1,
    title: "CHARACTER DETAILS",
    link: "",
  },
]