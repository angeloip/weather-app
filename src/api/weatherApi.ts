import axios from 'axios'
import { apiKey } from '../constants/constants'

const forecastEndpoint = (params: { cityName: string, days: string }) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`
const locationsEndpoint = (params: { cityName: string }) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`

const call = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getForecast = async (params: {
  cityName: string
  days: string
}) => {
  const endpoint = forecastEndpoint(params)
  return await call(endpoint)
}

export const getLocations = async (params: { cityName: string }) => {
  const endpoint = locationsEndpoint(params)
  return await call(endpoint)
}
