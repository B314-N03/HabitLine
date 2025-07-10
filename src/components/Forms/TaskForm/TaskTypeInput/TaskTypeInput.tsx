import { MenuItem } from "@mui/material";
import { taskTypeMap } from "../../../Helpers/TaskTypeMap";
import styles from "./task_type_input.module.scss";
import SelectHL from "../../../Widgets/Select/SelectHL";
import type { TaskType } from "../../../../Interfaces/ITask";

interface TaskTypeInputProps {
    title: string;
    value: string;
    setState: (state: TaskType) => void;
    helperText?: string;
    error?: boolean;
}

function TaskTypeInput({
    title,
    value,
    setState,
    helperText,
    error = false
}: TaskTypeInputProps) {



    return (
        <SelectHL<TaskType>
            title={title}
            value={value}
            setState={setState}
            error={error}
            helperText={helperText}
        >
            {
                Object.keys(taskTypeMap).map((taskType) => (
                    <MenuItem key={taskType} value={taskType} className={styles.taskType}>
                        {taskTypeMap[taskType]}
                        {taskType}
                    </MenuItem>
                ))
            }
        </SelectHL>
    );
}

export default TaskTypeInput;
