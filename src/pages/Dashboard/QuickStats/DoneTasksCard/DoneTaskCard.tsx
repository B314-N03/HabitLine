import { Card, Typography } from "@mui/material"
import baseStyles from '../../dashboard.module.scss';
import styles from './done_task_card.module.scss';
import { useState } from "react";
import { type ITask } from "../../../../Interfaces/ITask";

interface Props {

}

function DoneTaskCard(props: Props) {
    const { } = props
    const [tasks, setTasks] = useState<ITask[]>([]);
    return (
        <Card
            className={`${baseStyles.dashboard_card} ${styles.weatherCard}`}
            elevation={6}
            sx={{ flex: '.5 !important' }}
        >
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Done Tasks Today:
            </Typography>
            <div className={styles.doneTask}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Typography key={task.id} variant="body1" component="p">
                            {task.title}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="h5" component="h5" className={styles.noTasks}>
                        No tasks done today!
                    </Typography>
                )}

            </div>
        </Card>
    )
}

export default DoneTaskCard
