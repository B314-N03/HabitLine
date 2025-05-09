import { Button, Card, Tooltip, Divider, Typography } from "@mui/material"
import type { ITaskCard } from "../../../../Interfaces/ITaskCard"
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import ChevronUp from '@mui/icons-material/ChevronRight';
import type { JSX } from "@emotion/react/jsx-runtime";
import MediumPrio from '@mui/icons-material/DensityMedium';
import BugIcon from '@mui/icons-material/BugReportOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardOutlined';
import styles from "./task_card.module.scss";
import { priorityIconSize, taskTypeIconSize } from "./const";

function TaskCard(
    {
        taskType,
        priority,
        projectName,
        projectColor,
        title,
        description,
        createdAt,
        updatedAt,
        handleClick,
    }
    : ITaskCard) {
    
    
    const taskTypeMap: { [key: string]: JSX.Element } = {
        "Bug":
            <Tooltip title="Bug" placement="top" arrow>
                <BugIcon color="error" fontSize={taskTypeIconSize} />
            </Tooltip>,
        "Feature":
            <Tooltip title="Feature" placement="top" arrow>
                <CheckBoxIcon color="info" fontSize={taskTypeIconSize}/>
            </Tooltip>,
        "ToDo":
            <Tooltip title="Feature" placement="top" arrow>
                <ArrowUpwardIcon color="success" fontSize={taskTypeIconSize}/>
            </Tooltip>,
    };
    const priorityMap: { [key: string]: JSX.Element } = {
        "Critical": 
            <Tooltip title="Critical Priority" placement="top" arrow>
                <DoubleArrow color="error" sx={{ transform: 'rotate(-90deg)' }} fontSize={priorityIconSize}  />
            </Tooltip>,
        "High": 
            <Tooltip title="High Priority" placement="top" arrow>
                <ChevronUp color="error" sx={{ transform: 'rotate(-90deg)' }} fontSize={priorityIconSize}/>
            </Tooltip>,
        "Medium": 
            <Tooltip title="Medium Priority" placement="top" arrow>
                <MediumPrio color="warning" fontSize="medium"/>
            </Tooltip>,
        "Low": 
            <Tooltip title="Low Priority" placement="top" arrow>
                <ChevronUp color="success" sx={{ transform: 'rotate(90deg)' }} fontSize={priorityIconSize}/>
            </Tooltip>,
    };


    return (
        <Card className={styles.taskCard} elevation={6} onClick={handleClick}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
                    <p>{description}</p>
                </div>
                <Divider />
                <div className={styles.taskDetails}>
                    <div className={styles.taskDetailsItem}>
                        Last Updated: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="warning">{new Date(updatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</Typography>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        Created At: <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }} color="info">{new Date(createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</Typography>
                    </div>
                <div className={styles.taskDetailsFooter}>
                    <div className={styles.taskDetailsFooterItem}>
                            {taskTypeMap[taskType]}
                            <Divider orientation="vertical" flexItem sx={{borderRightWidth: 2}}/>
                            {priorityMap[priority]}
                    </div>
                    <div className={styles.taskDetailsFooterItem}>
                        <Button sx={{backgroundColor: projectColor, borderRadius: 2}} size="small"  variant="contained" style={{ backgroundColor: projectColor }}>
                            {projectName}
                        </Button>
                    </div>
                </div> 
                </div>
        </Card>
    )
}

export default TaskCard