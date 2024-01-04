import {
  CalendarIcon,
  DropIcon,
  LocationIcon,
  SearchIcon,
  SunIcon,
  WindIcon
} from './Icons'
import { useEffect, useState } from 'react'
import useDebounce from './hooks/useDebounce'
import { getForecast, getLocations } from './api/weatherApi'
import { type Weather, type Locations } from './types'
import { weatherImages } from './constants/constants'

function App() {
  const [locations, setLocations] = useState<Locations[]>([])
  const [weather, setWeather] = useState<Weather | null>(null)
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    if (search.length > 2) {
      getLocations({ cityName: search }).then((data: Locations[]) => {
        setLocations(data)
      })
    }
  }

  const handleLocation = (location: Locations) => {
    setSearch('')
    setLocations([])
    getForecast({ cityName: location.name, days: '7' }).then(
      (data: Weather) => {
        setWeather(data)
      }
    )
  }

  const searchDebounce = useDebounce(search, 1200)

  useEffect(() => {
    handleSearch()
  }, [searchDebounce])
  return (
    <div className="flex items-center justify-center min-h-[100dvh] relative">
      <div className="w-full h-full bg-[url(./assets/bg2.jpg)] bg-cover bg-center bg-no-repeat blur absolute"></div>
      <main className="mx-2 flex flex-col gap-4  w-[500px] bg-white bg-opacity-10 rounded-lg shadow-lg border border-r-0 border-b-0 border-opacity-30 border-gray-100 p-3 z-10 overflow-hidden">
        <header className="relative flex items-center rounded-full bg-white bg-opacity-20">
          <input
            type="text"
            className="flex-1 h-12 px-4 rounded-lg bg-transparent outline-none placeholder-white"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            value={search}
          />

          <div className="rounded-full bg-white bg-opacity-30 p-2 m-1">
            <SearchIcon />
          </div>
          {locations.length > 0 && (
            <ul className="absolute z-[100] rounded-3xl left-0 overflow-hidden top-[calc(100%_+_0.25em)] bg-black bg-opacity-20 w-full backdrop-blur-sm">
              {locations.map((location, index) => (
                <li
                  key={location.id}
                  className={`flex items-center gap-4 cursor-pointer px-4 py-2  hover:bg-white hover:bg-opacity-30 transition-colors ${
                    index === locations.length - 1
                      ? ''
                      : 'border-b border-gray-100 border-opacity-30'
                  }`}
                  onClick={() => {
                    handleLocation(location)
                  }}
                >
                  <LocationIcon />
                  <p>
                    {location.name},{' '}
                    <span className="font-semibold">{location.country}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </header>
        <main className="flex flex-col gap-4">
          <p className="text-white text-center text-2xl font-bold">
            {weather?.location.name},{' '}
            <span className="text-lg font-semibold text-gray-300">
              {weather?.location.country}
            </span>
          </p>
          <picture className="flex w-36 h-36 mx-auto">
            <img
              src={weatherImages[weather?.current.condition.text]}
              alt={weather?.current.condition.text}
              className="w-full h-full"
            />
          </picture>
          <div className="space-y-2">
            <p className="text-white text-center text-6xl font-bold">
              {weather?.current.temp_c}&#176;
            </p>
            <p className="text-white text-center text-xl tracking-widest">
              {weather?.current.condition.text}
            </p>
          </div>
          <div className="flex justify-between mx-4 mt-4">
            <div className="flex gap-2 items-center">
              <WindIcon />
              <p className="text-white font-semibold text-base">
                {weather?.current.wind_kph}km/h
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <DropIcon />
              <p className="text-white font-semibold text-base">
                {weather?.current.humidity}%
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <SunIcon />
              <p className="text-white font-semibold text-base">6 AM</p>
            </div>
          </div>
        </main>
        <footer className="space-y-3">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <p className="text-white text-base">Daily Forecast</p>
          </div>
          <div className="flex gap-x-4 overflow-y-auto">
            {weather?.forecast.forecastday.map((el, i) => {
              const date = new Date(el.date)
              const day = date.toLocaleString('en-us', { weekday: 'long' })
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center rounded-3xl py-3 px-5 bg-white bg-opacity-15 w-max"
                >
                  <picture className="h-11 w-11">
                    <img
                      src={weatherImages[el.day.condition.text]}
                      alt={el.day.condition.text}
                      className="w-full h-full"
                    />
                  </picture>
                  <p className="text-white">{day}</p>
                  <p className="text-white text-xl font-semibold">
                    {el.day.avgtemp_c}&#176;
                  </p>
                </div>
              )
            })}
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
