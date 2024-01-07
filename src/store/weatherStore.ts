import { create } from 'zustand'
import { type Locations, type Weather } from '../types'

interface State {
  locations: Locations[]
  setLocations: (locations: Locations[]) => void
  weather: Weather | null
  setWeather: (weather: Weather) => void
  search: string
  setSearch: (search: string) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useWeatherStore = create<State>((set) => ({
  locations: [],
  setLocations: (locations) => { set({ locations }) },
  weather: null,
  setWeather: (weather) => { set({ weather }) },
  search: '',
  setSearch: (search) => { set({ search }) },
  isLoading: true,
  setIsLoading: (isLoading) => { set({ isLoading }) }
}))
