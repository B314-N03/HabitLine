import { MenuItem } from "@mui/material";
import { priorityMap } from "../../../Helpers/TaskPriorityMap";
import styles from "./task_priority_input.module.scss";
import SelectHL from "../../../Widgets/Cards/Select/SelectHL";
import type { TaskPriority } from "../../../../Interfaces/ITask";

interface TaskPriorityInputProps {
    title: string;
    value: TaskPriority;
    setState: (state: TaskPriority) => void;
    helperText?: string;
    error?: boolean;
}


function TaskPriorityInput({
    title,
    value,
    setState,
    helperText,
    error = false
}: TaskPriorityInputProps) {
  return (
   <SelectHL<TaskPriority>
        title={title}
        value={value}
        setState={setState}
        error={error}
        helperText={helperText}
    >
        {
            Object.keys(priorityMap).map((priority) => (
                <MenuItem key={priority} value={priority} className={styles.taskPriority}>
                    {priorityMap[priority]}
                    {priority}
                </MenuItem>
            ))
        }
    </SelectHL>
  )
}

export default TaskPriorityInput