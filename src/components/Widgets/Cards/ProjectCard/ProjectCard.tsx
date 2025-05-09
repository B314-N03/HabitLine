import { Card, Divider, Typography } from "@mui/material"
import type { IProjectCard } from "../../../../Interfaces/IProjectCard";
import styles from "./project_card.module.scss"


function ProjectCard(
    { 
        title,
        description,
        completed,
        openTasks,
        createdAt,
        updatedAt,
        projectColor,
        id
    }
    : IProjectCard) {
  return (
    <Card key={id} sx={{ padding: 2, marginTop: 2, borderRadius: 2, width:"350px" }} elevation={6}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:"100%" }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.projectDetails}>
          <Divider />
            <div className={styles.projectDetailsItem}>
              Project Color: <div className={styles.projectColorDisplay} >
                <div className={styles.colorDisplay} style={{ backgroundColor: projectColor }} />
              </div>
            </div>
            <div className={styles.projectDetailsItem}>
              Completed: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="success" >{completed}</Typography>
            </div>
            <div className={styles.projectDetailsItem}>
              Open Tasks: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="error">{openTasks}</Typography>
            </div>
            <div className={styles.projectDetailsItem}>
              Last Update: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="warning">{new Date(updatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</Typography>
            </div>
            <div className={styles.projectDetailsItem}>
              Created At: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="info">{new Date(createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</Typography>
            </div>
          </div>
        </div>
    </Card>
  )
}

export default ProjectCard