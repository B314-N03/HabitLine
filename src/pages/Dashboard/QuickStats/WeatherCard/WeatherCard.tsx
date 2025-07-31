import { useMe } from '../../../../hooks/useAuth';
import baseStyles from '../../dashboard.module.scss';
import styles from './weather_card.module.scss';
import { Card, Typography } from '@mui/material';
import { Air, Cloud, LocationPin, Sunny, Thermostat, WaterDrop } from '@mui/icons-material';
import ChevronUp from '@mui/icons-material/ChevronRight';
import useWeather from '../../../../hooks/useWeather';

function WeatherCard() {
    const { data: user } = useMe();
    const userLocation = user?.weather?.region || '';
    const lat = user?.weather?.lat || '';
    const lon = user?.weather?.lon || '';
    const { data: weather, isLoading, error } = useWeather(lat, lon);

    const renderWeatherIcon = () => {
        if (!weather) return null;

        if (weather.cloud_pct > 50) return <Cloud fontSize="large" />;
        if (weather.cloud_pct > 25) return <Cloud fontSize="large" color="warning" />;
        return <Sunny fontSize="large" color="warning" />;
    };

    const renderWeatherDetails = () => {
        if (!weather) return null;

        return (
            <div className={styles.weatherInfos}>
                <div className={styles.mainInfo}>
                    <div className={styles.location}>
                        <LocationPin />
                        <h5>{userLocation}</h5>
                    </div>
                    <div className={styles.weatherMinMax}>
                        <Thermostat />
                        <h2>{weather.temp}°C</h2>
                    </div>
                </div>

                <div className={styles.temperatureStats}>
                    <div className={styles.weatherMinMax}>
                        <ChevronUp color="success" sx={{ transform: 'rotate(-90deg)' }} />
                        <h3>{weather.max_temp}°C</h3>
                    </div>
                    <div className={styles.weatherMinMax}>
                        <ChevronUp color="error" sx={{ transform: 'rotate(90deg)' }} />
                        <h3>{weather.min_temp}°C</h3>
                    </div>
                </div>

                <div className={styles.temperatureStats}>
                    <div className={styles.weatherMinMax}>
                        <WaterDrop color="primary" />
                        <h4>{weather.humidity} %</h4>
                    </div>
                    <div className={styles.weatherMinMax}>
                        <Air />
                        <h4>{weather.wind_speed} m/s</h4>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Card
            className={`${baseStyles.dashboard_card} ${styles.weatherCard}`}
            elevation={6}
            sx={{ flex: '.5 !important' }}
        >
            <div className={styles.weatherContent}>
                <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                    Current Weather
                </Typography>

                <div className={styles.weatherIcon}>
                    {userLocation && !isLoading && !error && renderWeatherIcon()}
                </div>

                {!userLocation ? (
                    <Typography>Please enter your location to view the weather.</Typography>
                ) : isLoading ? (
                    <Typography>Loading...</Typography>
                ) : error || !weather ? (
                    <Typography>Error fetching weather data.</Typography>
                ) : (
                    renderWeatherDetails()
                )}
            </div>
        </Card>
    );
}

export default WeatherCard;
