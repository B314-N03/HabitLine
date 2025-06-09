import { useEffect, useMemo, useState } from "react"
import { useProjects } from "../../hooks/useProjects"
import { useTasks } from "../../hooks/useTasks"
import ActiveProjects from "./ActiveProjects/ActiveProjects"
import MostUrgentTasks from "./MostUrgentTasks/MostUrgentTasks"
import QuickStats from "./QuickStats/QuickStats"
import styles from "./dashboard.module.scss"
import DashboardSkeleton from "./SkeletonView"

function Dashboard() {
  const {data: tasks, isLoading: isLoadingTasks} = useTasks()
  const {data: projects, isLoading: isLoadingProjects} = useProjects()
  const [isLoadingData, setIsLoadingData] = useState(true)
  useMemo(() => {
    if (tasks && projects) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
      localStorage.setItem('projects', JSON.stringify(projects))
    }
    if (isLoadingTasks || isLoadingProjects) {
      setIsLoadingData(true)
    } else {
      setIsLoadingData(false)
    }
  }, [tasks, projects])

  return (
    <main className={styles.dashboard_container}>
      {
        isLoadingData 
        ? 
          <DashboardSkeleton />
        :
          <>
            <QuickStats />
            <MostUrgentTasks />
            <ActiveProjects />
          </>
      }
    </main>
  )
}

export default Dashboard