import { Button, Card, Divider, Typography } from "@mui/material"
import { type ITaskCard } from "../../../../Interfaces/ITaskCard"
import styles from "./task_card.module.scss"
import { taskTypeMap } from "../../../Helpers/TaskTypeMap"
import { priorityMap } from "../../../Helpers/TaskPriorityMap"
import { useProjectInfosForTask } from "../../../../hooks/useProjectInfosForTask"

function TaskCard(
    {
        taskType,
        priority,
        title,
        description,
        createdAt,
        updatedAt,
        handleClick,
        projectId,
        variant = "small",
        showProject = true
    }
    : ITaskCard) {
    
    const projectInfos = useProjectInfosForTask(projectId);

    return (
        <Card className={`${styles.taskCard} ${styles[variant]}`} elevation={6} onClick={handleClick}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
                    <p>{description}</p>
                </div>
                {/* <Divider /> */}
                <div className={styles.taskDetails}>
                    {["medium", "large"].includes(variant) && 
                    <>
                        <div className={styles.taskDetailsItem}>
                            Last Updated: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="warning">{new Date(updatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</Typography>
                        </div>
                        <div className={styles.taskDetailsItem}>
                            Created At: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="info">{new Date(createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</Typography>
                        </div>
                    </>
                    }
                <div className={styles.taskDetailsFooter}>
                    <div className={styles.taskDetailsFooterItem}>
                            {taskTypeMap[taskType]}
                            <Divider orientation="vertical" flexItem sx={{borderRightWidth: 2}}/>
                            {priorityMap[priority]}
                    </div>
                   {showProject && <div className={styles.taskDetailsFooterItem}>
                        <Button sx={{backgroundColor: projectInfos?.color ? projectInfos?.color : "#fff", borderRadius: 2}} size="small"  variant="contained">
                            {projectInfos?.title}
                        </Button>
                    </div>}
                </div> 
                </div>
        </Card>
    )
}

export default TaskCard