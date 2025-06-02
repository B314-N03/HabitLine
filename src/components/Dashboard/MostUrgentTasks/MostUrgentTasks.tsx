import { Alert, Box, Card, Snackbar, Typography } from "@mui/material"
import TaskCard from "../../Widgets/Cards/TaskCard/TaskCard"
import dashboardStyles from "../dashboard.module.scss"
import { useEffect, useMemo, useState } from "react"
import type { ITask, ITaskFrontend } from "../../../Interfaces/ITask"
import TaskModal from "../../Modals/TaskModal/TaskModal"
import { useTasks } from "../../../hooks/useTasks"
import { taskModalNewTaskData } from "../../Helpers/modalBoilerPlateData"
import SucessSnackbar from "../../Widgets/Snackbars/SucessSnackbar"

function MostUrgentTasks() {
  const {data: tasks, isLoading, isError} = useTasks()

  const [openTaskModal, setOpenTaskModal] = useState(false)
  const [taskToView, setTaskToView] = useState<ITaskFrontend>(taskModalNewTaskData)
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [snackBarMessage, setSnackBarMessage] = useState('')
  const sortedTasks = useMemo(() => {
    const priorityOrder = {
      "Critical": 0,
      "High": 1,
      "Medium": 2,
      "Low": 3
    }
    if (!tasks) return null;
    return [...tasks].filter((task) => task.status != "done").sort((a, b) => {
      const priorityA = priorityOrder[a.priority] ?? 4;
      const priorityB = priorityOrder[b.priority] ?? 4;
      return priorityA - priorityB;
    });
  }, [tasks]);
  /**
   * Function to handle the click event on a task card
   * @param task The task object that was clicked
   */
  const handleCardClick = (task: ITask) => {
    setTaskToView(task)
  }

  /**
   * Use effect to open the task modal with the task details
   * when the user clicks on a task
   */
  useEffect(() => {
    if (taskToView === taskModalNewTaskData) return;

    setOpenTaskModal(true)
  }, [taskToView])

  /**
   * Use effect to reset the taskToView state when the modal is closed
   */
  useEffect(() => {
    if(!openTaskModal) setTaskToView(taskModalNewTaskData)
  },[openTaskModal])

  return (
    <Card className={dashboardStyles.dashboard_card} elevation={6}>
      <Box>
        <Typography variant="h5" component="h5" className={dashboardStyles.dashboard_card_title}>
          Most Urgent open Tasks:
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
        modalTitle="Edit Task"
        task={taskToView}
        isEditing
        setOpenSnackBar={setOpenSnackBar}
        setSnackBarMessage={setSnackBarMessage}
      />
      <SucessSnackbar openSnackBar={openSnackBar} setOpenSnackBar={setOpenSnackBar} snackBarMessage={snackBarMessage} />
    </Card>
  )
}

export default MostUrgentTasks