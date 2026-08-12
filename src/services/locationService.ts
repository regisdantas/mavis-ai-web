export type LocationData = {
  temperature: string
  weather: string
  city: string
  country: string
}

const apiKey = process.env.REACT_APP_MAPSCO_API_KEY

export const getWeatherDescription = (code: number): string => {
  if (code === 0) return '☀️ Sunny'
  if ([1, 2].includes(code)) return '🌤️ Partly Cloudy'
  if (code === 3) return '☁️ Cloudy'
  if ([45, 48].includes(code)) return '🌫️ Foggy'
  if ([51, 53, 55, 56, 57].includes(code)) return '🌦️ Light Rain'
  if ([61, 63, 65, 66, 67].includes(code)) return '🌧️ Rainy'
  if ([71, 73, 75, 77].includes(code)) return '❄️ Snowing'
  if ([80, 81, 82].includes(code)) return '🌧️ Rain Showers'
  if ([95, 96, 99].includes(code)) return '⛈️ Stormy'
  return '☁️ Cloudy'
}

export const getLocationData = async (): Promise<LocationData> =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not available'))
      return
    }

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,weather_code`
        )

        const weatherData = await weatherResponse.json()

        let city = ''
        let country = ''

        try {
          const geoResponse = await fetch(
            `https://geocode.maps.co/reverse?lat=${coords.latitude}&lon=${coords.longitude}&api_key=${apiKey}`
          )

          const geo = await geoResponse.json()

          city = geo.address?.city || geo.address?.town || geo.address?.village || ''

          country = geo.address?.country || ''
        } catch {
          console.warn('Reverse geocoding failed')
        }

        resolve({
          temperature: `${Math.round(weatherData.current.temperature_2m)}°C`,
          weather: getWeatherDescription(weatherData.current.weather_code),
          city,
          country,
        })
      } catch (err) {
        reject(err)
      }
    })
  })
