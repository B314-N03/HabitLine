import { Box, Card, Typography } from "@mui/material"
import dashboardStyles from "../dashboard.module.scss"
import { useState } from "react"
import type { IProject } from "../../../Interfaces/IProject"
import { useProjects } from "../../../hooks/useProjects"
import ProjectCard from "../../../components/Widgets/Cards/ProjectCard/ProjectCard"
import ProjectModal from "../../../components/Modals/ProjectModal/ProjectModal"

function ActiveProjects() {
  const { data: projects, isLoading, isError } = useProjects()
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [projectToView, setProjectToView] = useState<IProject>({
    id: "",
    title: "",
    description: "",
    projectColor: "",
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
    openTasks: 0,
    doneTasks: 0
  })

  const handleShowProjectModal = (project: IProject) => {
    setProjectToView(project)
    setProjectModalOpen(true)
  }

  return (
    <Card className={dashboardStyles.dashboard_card} elevation={6}>
      <Box>
        <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
          Active Projects:
        </Typography>
      </Box>
      <div className={dashboardStyles.scrollContainerCards}>
        <div className={dashboardStyles.cardsContainer}>
          {isLoading || isError ? (
            <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="info">{isLoading ? "Loading..." : "Error"}</Typography>
          ) : (
            projects?.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                openTasks={project.openTasks}
                doneTasks={project.doneTasks}
                createdAt={project.createdAt}
                updatedAt={project.lastUpdatedAt}
                id={project.id}
                projectColor={project.projectColor}
                handleClick={() => handleShowProjectModal(project)}
              />
            ))
          )}
        </div>
      </div>
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => { setProjectModalOpen(false) }}
        title="Edit Project"
        project={projectToView}
      ></ProjectModal>
    </Card>
  )
}

export default ActiveProjects