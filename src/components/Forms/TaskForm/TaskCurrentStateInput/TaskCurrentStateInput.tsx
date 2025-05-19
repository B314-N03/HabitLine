import styles from './task_current_state_input.module.scss'
import { taskCurrentStateMap } from "../../../Helpers/TaskCurrentStateMap"
import SelectHL from "../../../Widgets/Cards/Select/SelectHL"
import { MenuItem } from '@mui/material'
import type { TaskStatus } from '../../../../Interfaces/ITask'

interface TaskCurrentStateInputProps {
    title: string
    value: TaskStatus
    setState: (state: TaskStatus) => void
    helperText?: string
    error?: boolean
}

function TaskCurrentStateInput({
    title,
    value,
    setState,
    helperText,
    error = false
}: TaskCurrentStateInputProps) {
  return (
    <SelectHL<TaskStatus> 
        title={title}
        value={value}
        setState={setState}
        error={error}
        helperText={helperText}
    >
        {
            Object.keys(taskCurrentStateMap).map((taskState) => (
                <MenuItem key={taskState} value={taskState} className={styles.taskPriority}>
                    {taskCurrentStateMap[taskState as TaskStatus]}
                </MenuItem>
            ))
        }
    </SelectHL>

  )
}

export default TaskCurrentStateInput