import { useEffect, useState } from 'react'
import { useMe } from '../../../../hooks/useAuth'
import baseStyles from '../../dashboard.module.scss'
import styles from './weather_card.module.scss'
import { Card, Typography } from '@mui/material'
function WeatherCard() {
    const { data: user } = useMe()
    const userlocation = user?.weather?.region || undefined
    const [isLoadingWeather, setIsLoadingWeather] = useState(false)
    const [weatherData, setWeatherData] = useState({})
    useEffect(() => {
        if (!userlocation) return

        setIsLoadingWeather(true)
        const locationWithoutCountry = userlocation.split(',')[0]
        fetch(`https://api.api-ninjas.com/v1/weather?city=${locationWithoutCountry}`)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data)
                setIsLoadingWeather(false)
            })


    }, [userlocation]);
    return (
        <Card className={`${baseStyles.dashboard_card} ${styles.weatherCard}`} elevation={6} sx={{ flex: ".5 !important" }}>
            <div className={styles.weatherContent}>
                <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                    Weather:
                </Typography>
                {userlocation ?
                    <Typography>
                        Please enter your location for what region(s) you want the Weather
                    </Typography>
                    :
                    <div>
                        {isLoadingWeather ?
                            <p>Loading...</p>
                            :
                            <div>
                                <p>City: {weatherData.city}</p>
                                <p>Temperature: {weatherData.temp}</p>
                                <p>Humidity: {weatherData.humidity}</p>
                                <p>Wind Speed: {weatherData.wind_speed}</p>
                            </div>
                        }
                    </div>
                }
            </div>
        </Card>
    )
}

export default WeatherCard