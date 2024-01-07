import axios from 'axios'
import { apiKey } from '../constants/constants'
import { type Locations, type Weather } from '../types'

export const getForecast = async (params: {
  cityName: string
  days: string
}) => await axios.get<Weather>(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`)

export const getLocations = async (params: { cityName: string }) => await axios.get<Locations[]>(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`)
