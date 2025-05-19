import ActiveProjects from "./ActiveProjects/ActiveProjects"
import MostUrgentTasks from "./MostUrgentTasks/MostUrgentTasks"
import QuickStats from "./QuickStats/QuickStats"
import styles from "./dashboard.module.scss"

function Dashboard() {
  return (
    <main className={styles.dashboard_container}>
        <QuickStats />
        <MostUrgentTasks />
        <ActiveProjects />
    </main>
  )
}

export default Dashboard