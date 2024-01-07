import { useEffect } from 'react'
import { LocationIcon, SearchIcon } from '../Icons'
import { getForecast, getLocations } from '../api/weatherApi'
import useDebounce from '../hooks/useDebounce'
import { useWeatherStore } from '../store/weatherStore'
import { type Locations } from '../types'

export default function Header() {
  const {
    search,
    setSearch,
    locations,
    setLocations,
    setWeather,
    setIsLoading
  } = useWeatherStore((state) => state)

  const handleSearch = async () => {
    if (search.length > 2) {
      await getLocations({ cityName: search }).then((res) => {
        setLocations(res.data)
      })
    }
  }

  const handleLocation = async (location: Locations) => {
    setSearch('')
    setLocations([])
    setIsLoading(true)
    await getForecast({ cityName: location.name, days: '7' }).then((res) => {
      setWeather(res.data)
    })
    setIsLoading(false)
  }

  const searchDebounce = useDebounce(search, 1200)

  useEffect(() => {
    handleSearch()
  }, [searchDebounce])

  return (
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
  )
}
