import baseStyles from '../../dashboard.module.scss'
import styles from './weather_card.module.scss'
import { Card, Typography } from '@mui/material'
function WeatherCard() {
  return (
    <Card className={`${baseStyles.dashboard_card} ${styles.weatherCard}`} elevation={6} sx={{ flex: ".5 !important" }}>
        <div className={styles.weatherContent}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Weather:
            </Typography>
            <p>Loading...</p>
            {/* Placeholder for weather data */}
        </div>
    </Card>
    )
}

export default WeatherCard