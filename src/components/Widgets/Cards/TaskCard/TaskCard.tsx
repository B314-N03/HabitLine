import { Card, Typography, Chip } from "@mui/material"
import { type ITaskCard } from "../../../../Interfaces/ITaskCard"
import styles from "./task_card.module.scss"
import { taskTypeMap } from "../../../Helpers/TaskTypeMap"
import { priorityMap } from "../../../Helpers/TaskPriorityMap"
import { useProjectInfosForTask } from "../../../../hooks/useProjectInfosForTask"
import RichTextEditor from "../../../Forms/FormWidgets/RichtTextEditor/RichTextEditor"
import StyledDivider from "../../StyledDivider/StyledDivider"

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
        <Card sx={{ overflow: "unset" }} className={`${styles.taskCard} ${styles[variant]}`} elevation={6} onClick={handleClick}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 className={styles.taskCardTitle}>{title}</h3>
                <StyledDivider orientation="horizontal" />
                {<RichTextEditor editorValue={description} setEditorValue={() => { }} readOnly showOnlyText />}
            </div>
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
                        <StyledDivider orientation="vertical" flexItem customSX={{ borderRightWidth: 2 }} />
                        {priorityMap[priority]}
                    </div>
                    {showProject && <div className={styles.taskDetailsFooterItem}>
                        <Chip
                            sx={{ backgroundColor: projectInfos?.color ? projectInfos?.color : "#fff", borderRadius: 2, color: projectInfos?.color ? "#fff" : "#000" }}
                            size="small"
                            variant="filled"
                            label={projectInfos?.title}
                        />
                    </div>}
                </div>
            </div>
        </Card>
    )
}

export default TaskCard