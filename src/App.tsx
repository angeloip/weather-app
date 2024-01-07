import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { useWeatherStore } from './store/weatherStore'
import { useEffect } from 'react'
import { getForecast } from './api/weatherApi'
import Spinner from './components/Spinner'

function App() {
  const { isLoading, setIsLoading, setWeather } = useWeatherStore(
    (state) => state
  )

  const getInitialWeather = async () => {
    await getForecast({ cityName: 'Madrid', days: '7' })
      .then((res) => {
        setWeather(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getInitialWeather()
  }, [])

  console.log(isLoading)

  return (
    <div className="flex items-center justify-center min-h-[100dvh] relative">
      <div className="w-full h-full bg-[url(./assets/bg2.jpg)] bg-cover bg-center bg-no-repeat blur absolute"></div>
      <main className="mx-2 flex flex-col gap-4  w-[500px] bg-white bg-opacity-10 rounded-lg shadow-lg border border-r-0 border-b-0 border-opacity-30 border-gray-100 p-3 z-10 overflow-hidden">
        <Header />
        {!isLoading ? (
          <>
            <Main />
            <Footer />
          </>
        ) : (
          <div className="flex mx-auto my-32">
            <Spinner />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
