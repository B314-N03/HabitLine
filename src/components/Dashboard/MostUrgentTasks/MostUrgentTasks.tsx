import { Box, Card, Typography } from "@mui/material"
import TaskCard from "../../Widgets/Cards/TaskCard/TaskCard"
import dashboardStyles from "../dashboard.module.scss"
import { useEffect, useState } from "react"
import { taskMap } from "../../../../mockdata/tasks"
import { projects } from "../../../../mockdata/projects"
import type { ITask } from "../../../Interfaces/ITask"
import TaskModal from "../../Modals/TaskModal/TaskModal"

function MostUrgentTasks() {
  const [sortedTasks, setSortedTasks] = useState<ITask[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const [taskToView, setTaskToView] = useState<ITask>({
    id: 0,
    title: "",
    description: "",
    completed: false, 
    createdAt: new Date(),
    updatedAt: new Date(),
    priority: "Medium",
    taskType: "ToDo",
    projectId: 0
  })
  const priorityOrder = {
    "Critical": 0,
    "High": 1,
    "Medium": 2,
    "Low": 3
  }
  useEffect(() => {
    const sorted = (taskMap as ITask[]).sort((a, b) => {
      const priorityA = priorityOrder[a.priority] ?? 4;
      const priorityB = priorityOrder[b.priority] ?? 4;
      return priorityA - priorityB;
    });

    const finished = sorted.map((task: ITask) => {
      task.projectName = projects[task.projectId].title
      task.projectColor = projects[task.projectId].projectColor
      return task
    })

    setSortedTasks(finished)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardClick = (task: ITask) => {
    setTaskToView(task)
    setOpenTaskModal(true)
  }

  return (
    <Card className={dashboardStyles.dashboard_card} elevation={6}>
      <Box>
        <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
          Most Urgent Tasks:
        </Typography>
      </Box>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        {loading ? (
          <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="info">Loading...</Typography>
        ) : (
          sortedTasks?.slice(0, 3).map((task) => (
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
              projectName={projects[task.projectId].title}
              projectColor={projects[task.projectId].projectColor}
              handleClick={() => handleCardClick(task)}
            />
          ))
        )}
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