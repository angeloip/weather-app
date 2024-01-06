import { DropIcon, SunIcon, WindIcon } from '../Icons'
import { useWeatherStore } from '../store/weatherStore'

export default function Main() {
  const { weather } = useWeatherStore((state) => state)

  return (
    <main className="flex flex-col gap-4">
      <p className="text-white text-center text-2xl font-bold">
        {weather?.location.name},{' '}
        <span className="text-lg font-semibold text-gray-300">
          {weather?.location.country}
        </span>
      </p>
      <picture className="flex w-36 h-36 mx-auto">
        <img
          src={weather?.current.condition.icon}
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
          <p className="text-white font-semibold text-base">
            {weather?.forecast.forecastday[0].astro.sunrise}
          </p>
        </div>
      </div>
    </main>
  )
}
