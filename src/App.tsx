import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { useWeatherStore } from './store/weatherStore'
import presentation from './assets/iconapp.png'

function App() {
  const { weather } = useWeatherStore((state) => state)
  return (
    <div className="flex items-center justify-center min-h-[100dvh] relative">
      <div className="w-full h-full bg-[url(./assets/bg2.jpg)] bg-cover bg-center bg-no-repeat blur absolute"></div>
      <main className="mx-2 flex flex-col gap-4  w-[500px] bg-white bg-opacity-10 rounded-lg shadow-lg border border-r-0 border-b-0 border-opacity-30 border-gray-100 p-3 z-10 overflow-hidden">
        <Header />
        {weather !== null ? (
          <>
            <Main />
            <Footer />
          </>
        ) : (
          <div className="my-10">
            <h1 className="text-white text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-200">
              Weather App
            </h1>
            <picture className="flex w-52 h-52 mx-auto">
              <img
                src={presentation}
                alt="presentation"
                className="w-full h-full"
              />
            </picture>
            <p className="text-white text-center text-xl font-bold">
              Search for a city
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
