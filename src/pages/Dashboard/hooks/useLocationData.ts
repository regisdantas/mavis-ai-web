import { useEffect, useState } from 'react'
import { getLocationData } from '../../../services/locationService'

interface LocationState {
  city: string
  country: string
}

export function useLocationData() {
  const [temperature, setTemperature] = useState('')
  const [weather, setWeather] = useState('')
  const [location, setLocation] = useState<LocationState>({
    city: '',
    country: '',
  })

  useEffect(() => {
    getLocationData()
      .then((data) => {
        setTemperature(data.temperature)
        setWeather(data.weather)

        setLocation({
          city: data.city,
          country: data.country,
        })
      })
      .catch(console.error)
  }, [])

  return {
    temperature,
    weather,
    location,
  }
}
