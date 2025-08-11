import { Card, Typography } from "@mui/material"
import styles from "./quick_stats.module.scss"
import dashboardStyles from "../dashboard.module.scss"
import UserCard from "./UserCard/UserCard"
import WeatherCard from "./WeatherCard/WeatherCard"
import DailyTasksCard from "./DailyTasksCard/DailyTasksCard"
import CalendarCard from "./CalendarCard/CalendarCard"

function QuickStats() {
    return (
        <div className={styles.quickStatsContainer}>
            <UserCard />
            {/* <CalendarCard /> */}
            <DailyTasksCard />
            <WeatherCard />
            <Card className={dashboardStyles.dashboard_card} elevation={6} >
                <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                    Done Tasks Today:
                </Typography>

            </Card>
        </div>

    )
}

export default QuickStats