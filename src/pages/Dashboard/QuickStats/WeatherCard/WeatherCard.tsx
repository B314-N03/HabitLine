import { useEffect, useState } from 'react'
import { useMe } from '../../../../hooks/useAuth'
import baseStyles from '../../dashboard.module.scss'
import styles from './weather_card.module.scss'
import { Card, Typography } from '@mui/material'
import { type IWeatherApiResponse } from '../../../../Interfaces/IWeatherApiResponse'
import { Air, Cloud, LocationPin, Sunny, Thermostat, WaterDrop } from '@mui/icons-material'
import ChevronUp from '@mui/icons-material/ChevronRight';

function WeatherCard() {
    const { data: user } = useMe()
    const userlocation = user?.weather?.region || ''
    const lat = user?.weather?.lat || ''
    const lon = user?.weather?.lon || ''
    const [isLoadingWeather, setIsLoadingWeather] = useState(false)
    const [weatherData, setWeatherData] = useState<IWeatherApiResponse>({
        city: '',
        temp: '',
        humidity: '',
        wind_speed: '',
        min_temp: '',
        max_temp: '',
        cloud_pct: 0
    })

    useEffect(() => {
        if (!userlocation) return

        setIsLoadingWeather(true)
        fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`,
            {
                headers: {
                    'X-Api-Key': import.meta.env.VITE_API_KEY_API_NINJAS
                }
            }
        )
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
                    Current Weather
                </Typography>
                <div className={styles.weatherIcon}>
                    {userlocation && !isLoadingWeather && (
                        weatherData.cloud_pct > 50 ?
                            <Cloud fontSize='large' />
                            :
                            weatherData.cloud_pct > 25 ?
                                <Cloud color='warning' fontSize='large' />
                                :
                                <Sunny color='warning' fontSize='large' />
                    )}
                </div>
                {!userlocation ?
                    <Typography>
                        Please enter your location for what region(s) you want the Weather
                    </Typography>
                    :
                    isLoadingWeather ?
                        <p>Loading...</p>
                        :
                        <div className={styles.weatherInfos}>
                            <div className={styles.mainInfo}>
                                <div className={styles.location}>
                                    <LocationPin />
                                    <h5>{userlocation}</h5>
                                </div>
                                <div className={styles.weatherMinMax}>
                                    <Thermostat />
                                    <h2>
                                        {weatherData.temp}°C
                                    </h2>
                                </div>
                            </div>
                            <div className={styles.temperatureStats}>
                                <div className={styles.weatherMinMax}>
                                    <ChevronUp color="success" sx={{ transform: 'rotate(-90deg)' }} />
                                    <h3>
                                        {weatherData.max_temp}°C
                                    </h3>
                                </div>
                                <div className={styles.weatherMinMax}>
                                    <ChevronUp color="error" sx={{ transform: 'rotate(90deg)' }} />
                                    <h3>
                                        {weatherData.min_temp}°C
                                    </h3>
                                </div>
                            </div>
                            <div className={styles.temperatureStats}>
                                <div className={styles.weatherMinMax}>
                                    <WaterDrop color='primary' />
                                    <h4>
                                        {weatherData.humidity} %
                                    </h4>
                                </div>
                                <div className={styles.weatherMinMax}>
                                    <Air />
                                    <h4>
                                        {weatherData.wind_speed} m/s
                                    </h4>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </Card>
    )
}

export default WeatherCard