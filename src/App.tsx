import cloudy from './assets/partlycloudy.png'
import { DropIcon, SearchIcon, SunIcon, WindIcon } from './icons'

function App() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] relative">
      <div className="w-full h-full bg-[url(./assets/bg2.jpg)] bg-cover bg-center bg-no-repeat blur absolute"></div>
      <main className="mx-2 flex flex-col gap-4 h-[500px] w-[500px] bg-white bg-opacity-10 rounded-lg shadow-lg border border-r-0 border-b-0 border-opacity-30 border-gray-100 p-3 z-10 ">
        <header className="flex items-center rounded-full bg-white bg-opacity-20">
          <form className="flex-1">
            <input
              type="text"
              className="w-full h-12 px-4 rounded-lg bg-transparent outline-none placeholder-white"
              placeholder="Search..."
              autoComplete="off"
            />
          </form>
          <div className="rounded-full bg-white bg-opacity-30 p-2 m-1">
            <SearchIcon />
          </div>
        </header>
        <main>
          <p className="text-white text-center text-2xl font-bold">
            London,{' '}
            <span className="text-lg font-semibold text-gray-300">
              United Kingdom
            </span>
          </p>
          <picture className="flex justify-center w-full">
            <img src={cloudy} alt="partylecloudy" className="w-40 h-40" />
          </picture>
          <div className="space-y-2">
            <p className="text-white text-center text-6xl font-bold">
              24&#176;
            </p>
            <p className="text-white text-center text-xl tracking-widest">
              Partly Cloudy
            </p>
          </div>
          <div className="flex justify-between mx-4 mt-4">
            <div className="flex gap-2 items-center">
              <WindIcon />
              <p className="text-white font-semibold text-base">5 km/h</p>
            </div>
            <div className="flex gap-2 items-center">
              <DropIcon />
              <p className="text-white font-semibold text-base">5 km/h</p>
            </div>
            <div className="flex gap-2 items-center">
              <SunIcon />
              <p className="text-white font-semibold text-base">5 km/h</p>
            </div>
          </div>
        </main>
      </main>
    </div>
  )
}

export default App
