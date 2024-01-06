import { CalendarIcon } from '../Icons'
import { useWeatherStore } from '../store/weatherStore'

export default function Footer() {
  const { weather } = useWeatherStore((state) => state)

  return (
    <footer className="space-y-3">
      <div className="flex items-center gap-2">
        <CalendarIcon />
        <p className="text-white text-base">Daily Forecast</p>
      </div>
      <div className="flex gap-x-4 overflow-y-auto">
        {weather?.forecast.forecastday.map((el, i) => {
          const date = new Date(el.date)
          const day = date.toLocaleString('en-us', { weekday: 'short' })
          return (
            <div
              key={i}
              className="flex flex-col gap-1 justify-center items-center rounded-3xl py-3 px-6 bg-white bg-opacity-15 w-max"
            >
              <picture className="h-11 w-11">
                <img
                  src={el.day.condition.icon}
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
  )
}
