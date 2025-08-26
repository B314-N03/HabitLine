import styles from "./quick_stats.module.scss"
import WeatherCard from "./WeatherCard/WeatherCard"
import DailyTasksCard from "./DailyTasksCard/DailyTasksCard"
import CalendarCard from "./CalendarCard/CalendarCard"
import DoneTaskCard from "./DoneTasksCard/DoneTaskCard"

function QuickStats() {
    return (
        <div className={styles.quickStatsContainer}>
            <CalendarCard />
            <DailyTasksCard />
            <WeatherCard />
            <DoneTaskCard />
        </div>

    )
}

export default QuickStats