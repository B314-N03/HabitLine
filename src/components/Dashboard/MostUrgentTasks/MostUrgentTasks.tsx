import { Box, Card, Typography } from "@mui/material"
import TaskCard from "../../Widgets/Cards/TaskCard/TaskCard"
import dashboardStyles from "../dashboard.module.scss"
import { useMemo, useState } from "react"
import type { ITask } from "../../../Interfaces/ITask"
import TaskModal from "../../Modals/TaskModal/TaskModal"
import { useTasks } from "../../../hooks/useTasks"

function MostUrgentTasks() {
  const {data: tasks, isLoading, isError} = useTasks()
  
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const [taskToView, setTaskToView] = useState<ITask>({
    id: "",
    title: "",
    description: "",
    completed: false, 
    createdAt: new Date(),
    updatedAt: new Date(),
    priority: "Medium",
    taskType: "Feature",
    projectId: "",
    status: "to_do"
  })
  
  const sortedTasks = useMemo(() => {
    const priorityOrder = {
      "Critical": 0,
      "High": 1,
      "Medium": 2,
      "Low": 3
    }
    if (!tasks) return null;
    return [...tasks].sort((a, b) => {
      const priorityA = priorityOrder[a.priority] ?? 4;
      const priorityB = priorityOrder[b.priority] ?? 4;
      return priorityA - priorityB;
    });
  }, [tasks]);

  const handleCardClick = (task: ITask) => {
    setTaskToView(task)
    setOpenTaskModal(true)
  }

  return (
    <Card className={dashboardStyles.dashboard_card} elevation={6}>
      <Box>
        <Typography variant="h5" component="h5" className={dashboardStyles.dashboard_card_title}>
          Most Urgent Tasks:
        </Typography>
      </Box>
      <div className={dashboardStyles.scrollContainerCards}>
        <div className={dashboardStyles.cardsContainer}>
          {isLoading || isError ? (
            <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="info">{isLoading ? "Loading..." : "Error"}</Typography>
          ) : (
            sortedTasks?.slice(0, 7).map((task) => (
              <TaskCard
                key={task.id}
                taskType={task.taskType}
                priority={task.priority}
                title={task.title}
                description={task.description}
                createdAt={task.createdAt}
                updatedAt={task.updatedAt}
                id={task.id}
                projectId={task.projectId}
                handleClick={() => handleCardClick(task)}
                variant="small"
              />
            ))
          )}
        </div>
      </div>

      <TaskModal
        isOpen={openTaskModal}
        onClose={() => setOpenTaskModal(false)}
        title="Edit Task"
        task={taskToView}
      />
    </Card>
  )
}

export default MostUrgentTasks