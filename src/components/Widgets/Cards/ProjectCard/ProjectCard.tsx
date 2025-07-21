import { Card, Typography } from "@mui/material"
import type { IProjectCard } from "../../../../Interfaces/IProjectCard";
import styles from "./project_card.module.scss"
import StyledDivider from "../../StyledDivider/StyledDivider";
import formatDateHumanFriendly from "../../../Helpers/FormatDateHumanFriendly";
import RichTextEditor from "../../../Forms/FormWidgets/RichtTextEditor/RichTextEditor";


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
  const calculatedCompletionState =
    totalTasks === 0 ? NaN : (doneTasks / totalTasks) * 100
  const shouldIncludeTime = false
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
      color: "success"
    },
    {
      title: "Open Tasks",
      value: openTasks,
      color: "error"
    },
    {
      title: "Completed",
      value: isNaN(calculatedCompletionState) ? "No Tasks" : Math.floor(calculatedCompletionState) + "%",
      color: isNaN(calculatedCompletionState) ? "grey" : "success"
    },
    {
      title: "Last Update",
      value: formatDateHumanFriendly(updatedAt, shouldIncludeTime),
      color: "warning"
    },
    {
      title: "Created At",
      value: formatDateHumanFriendly(createdAt, shouldIncludeTime),
      color: "info"
    }
  ]
  return (
    <Card key={id} className={styles.projectCard} elevation={6} onClick={handleClick}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: "100%" }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
          <RichTextEditor editorValue={description} setEditorValue={() => { }} readOnly showOnlyText />
        </div>
        <div className={styles.projectDetails}>
          <StyledDivider orientation="horizontal" />
          {projectDetails.map((detail) => (
            <div className={styles.projectDetailsItem} key={detail.title}>
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