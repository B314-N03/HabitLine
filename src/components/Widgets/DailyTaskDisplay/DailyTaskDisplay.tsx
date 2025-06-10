import { Checkbox, Typography } from '@mui/material'
import { useState } from 'react'

import styles from './daily_task_display.module.scss'
import type { IDailyTask } from '../../../Interfaces/IDailyTask'

interface DailyTaskDisplayProps {
  dailyTask: IDailyTask;
}

function DailyTaskDisplay({ dailyTask, ...props }: DailyTaskDisplayProps) {
    const [isCompleted, setIsCompleted] = useState(dailyTask.completed);
    return (
    <div className={styles.dailyTask} {...props} onClick={() => {setIsCompleted(!isCompleted)}}>
        <Checkbox checked={isCompleted} color="info" sx={{color: 'var(--text-main)'}}/>
        <Typography variant="h6" className={styles.dailyTaskTitle}>
            {dailyTask.title}
        </Typography>
    </div>
  )
}

export default DailyTaskDisplay