import { useState } from "react";
import styles from './taskform.module.scss'
import { Input, Select, TextareaAutosize } from "@mui/material";
import type { ITask } from "../../../Interfaces/ITask";

interface TaskFormProps {
    task: ITask
}

function TaskForm({
   task: { title, description, priority, taskType }
}: TaskFormProps) {
    const [titleState, setTitleState] = useState(title);
    const [descriptionState, setDescriptionState] = useState(description);
    const [priorityState, setPriorityState] = useState(priority);
    const [taskTypeState, setTaskTypeState] = useState(taskType);
    const [selectRef, setSelectRef] = useState(null);
    return (
    <form className={styles.taskform}>
            <Input placeholder="Title" value={titleState} onChange={(e) => setTitleState(e.target.value)} />
            <TextareaAutosize minRows={3} placeholder="Description" value={descriptionState} onChange={(e) => setDescriptionState(e.target.value)} />
            <Select ref={null} value={priorityState} onChange={(e) => setPriorityState(e.target.value)} />
            <Select value={taskTypeState} onChange={(e) => setTaskTypeState(e.target.value)} />    
    </form>
  )
}

export default TaskForm