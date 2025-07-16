import { useMemo, useState } from "react"
import { useProjects } from "../../hooks/useProjects"
import { useTasks } from "../../hooks/useTasks"
import ActiveProjects from "./ActiveProjects/ActiveProjects"
import MostUrgentTasks from "./MostUrgentTasks/MostUrgentTasks"
import QuickStats from "./QuickStats/QuickStats"
import styles from "./dashboard.module.scss"
import DashboardSkeleton from "./SkeletonView"
import { useDailyTasks } from "../../hooks/useDailyTasks"

function Dashboard() {
  const {data: tasks, isLoading: isLoadingTasks} = useTasks()
  const {data: projects, isLoading: isLoadingProjects} = useProjects()
  const {data: dailyTasks, isLoading: isLoadingDailyTasks} = useDailyTasks()
  const [isLoadingData, setIsLoadingData] = useState(true)
  useMemo(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('projects', JSON.stringify(projects))
    localStorage.setItem('dailyTasks', JSON.stringify(dailyTasks))
    if (isLoadingTasks || isLoadingProjects || isLoadingDailyTasks) {
      setIsLoadingData(true)
    } else {
      setIsLoadingData(false)
    }
  }, [tasks, projects, isLoadingTasks, isLoadingProjects, dailyTasks, isLoadingDailyTasks])

  return (
    <main className={styles.dashboard_container}>
      {
        isLoadingData 
        ? 
          <DashboardSkeleton />
        :
          <>
            <MostUrgentTasks />
            <QuickStats />
            <ActiveProjects />
          </>
      }
    </main>
  )
}

export default Dashboard