import { Card, Divider, Typography } from "@mui/material"
import type { IProjectCard } from "../../../../Interfaces/IProjectCard";
import styles from "./project_card.module.scss"


function ProjectCard(
    { 
        title,
        description,
        openTasks,
        doneTasks,
        createdAt,
        updatedAt,
        projectColor,
        id,
        handleClick
    }
    : IProjectCard) {
      const totalTasks = doneTasks + openTasks
      const calculatedCompletionState = doneTasks / totalTasks * 100

      const projectDetails = [
        {
          title: "Project Color",
          value:
            <div className={styles.projectColorDisplay}> 
              <div className={styles.colorDisplay} style={{ backgroundColor: projectColor }} />
            </div>
        },
        {
          title: "Done Tasks",
          value: doneTasks,
          color:"success"
        },
        {
          title: "Open Tasks",
          value: openTasks,
          color:"error" 
        },
        {
          title: "Completed",
          value: isNaN(calculatedCompletionState) ? "No Tasks" : Math.floor(calculatedCompletionState) + "%",
          color: isNaN(calculatedCompletionState) ? "grey" : "success"
        },
        {
          title: "Last Update",
          // value: new Date(updatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
          value: new Date(updatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
          color: "warning"
        },
        {
          title: "Created At",
          value: new Date(createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
          color: "info"
        }
      ]
  return (
    <Card key={id} className={styles.projectCard} elevation={6} onClick={handleClick}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:"100%" }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.projectDetails}>
            <Divider />
            {projectDetails.map((detail, index) => (
              <div className={styles.projectDetailsItem} key={index}>
                {detail.title}: 
                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color={detail.color}>
                  {detail.value}
                </Typography>
              </div>
            ))}
        </div>
        </div>
    </Card>
  )
}

export default ProjectCard