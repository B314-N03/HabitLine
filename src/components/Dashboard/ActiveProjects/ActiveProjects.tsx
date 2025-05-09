import { Box, Card, Typography } from "@mui/material"
import ProjectCard from "../../Widgets/Cards/ProjectCard/ProjectCard"
import dashboardStyles from "../dashboard.module.scss"

function ActiveProjects() {
  return (
    <Card className={dashboardStyles.dashboard_card} elevation={6}>
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
        Active Projects:
      </Typography>
    </Box>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <ProjectCard 
        title="AGHSP"
        description="Der in Unity geschriebene Schießsimulator"
        completed={5}
        openTasks={2}
        createdAt="2023-01-01T00:00:00Z"
        updatedAt="2023-01-10T00:00:00Z"
        id={1}
        projectColor="red"
        />
      <ProjectCard 
        title="Podmans Otter Attack"
        description="Ein in Unity geschriebenes Spiel, in dem man gegen Otter kämpft"
        completed={5}
        openTasks={2}
        createdAt="2023-01-01T00:00:00Z"
        updatedAt="2023-01-10T00:00:00Z"
        id={1}
        projectColor="green"
        />
    </div>
  </Card>  
  )
}

export default ActiveProjects