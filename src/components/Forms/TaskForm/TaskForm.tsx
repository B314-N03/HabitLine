import { useState } from "react";
import styles from './taskform.module.scss'
import { Input } from "@mui/material";
import type { ITaskFrontend } from "../../../Interfaces/ITask";
import TaskTypeInput from "./TaskTypeInput/TaskTypeInput";
import TaskPriorityInput from "./TaskPriorityInput/TaskPriorityInput";
import TaskProjectInput from "./TaskProjectInput/TaskProjectInput";
import CheckMark from '@mui/icons-material/Check';
import DeleteBin from '@mui/icons-material/Delete';
import CrossIcon from '@mui/icons-material/Clear';
import IconButton from "../../Widgets/Cards/Buttons/IconButton";
import { useCreateOrUpdateTask, useDeleteTask } from "../../../hooks/useTasks";
import TaskCurrentStateInput from "./TaskCurrentStateInput/TaskCurrentStateInput";
import RichTextEditor from "../FormWidgets/RichtTextEditor/RichTextEditor";

interface TaskFormProps {
    task: ITaskFrontend,
    onClose: () => void,
    isEditing: boolean
}

function TaskForm({
   task: { title, description, priority, taskType, id, projectId, status },
    onClose,
    isEditing = false
}: TaskFormProps) {
    const [titleState, setTitleState] = useState(title);
    const [descriptionState, setDescriptionState] = useState(description);
    const [taskTypeState, setTaskTypeState] = useState(taskType);
    const [priorityState, setPriorityState] = useState(priority);
    const [projectState, setProjectState] = useState(projectId);
    const [currentTaskState, setCurrentTaskState] = useState(status);
    const mutation = useCreateOrUpdateTask();
    const deleteMutation = useDeleteTask();
    const handleSubmit = () => {
        mutation.mutate(
            {
                id,
                title: titleState,
                description: descriptionState,
                priority: priorityState,
                taskType: taskTypeState,
                projectId: projectState,
                status: currentTaskState,
                isEditing
            }, 
            {
                onSuccess: () => {
                    setTitleState('');
                    setDescriptionState('');
                    setPriorityState('Low');
                    setTaskTypeState('Bug');
                    setCurrentTaskState('to_do');
                    setProjectState('');
                    onClose();
                },
            },   
        )
    }

    const handleDelete = () => 
        deleteMutation.mutate(
            id, 
            { onSuccess: () => {
                onClose()
            } });


    return (
    <form className={styles.taskform}>
            <div className={styles.taskFormHeader}>
                <Input 
                    placeholder="Title"
                    value={titleState}
                    onChange={(e) => setTitleState(e.target.value)} 
                    className={styles.taskFormHeaderTitle}
                    sx={{ width: '30%' }}
                />
                <div className={styles.taskFormHeaderRight}>
                    <div className={styles.taskFormHeaderRightItem}>
                        Created At: <span>{new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className={styles.taskFormHeaderRightItem}>
                        Updated At: <span>{new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                </div>
            </div>
            
            <div className={styles.taskformInputs}>
                <TaskTypeInput 
                    title="Task Type"
                    value={taskTypeState}
                    setState={setTaskTypeState}
                    helperText="Please select a task type"
                />
                <TaskPriorityInput
                    title="Priority"
                    value={priorityState}
                    setState={setPriorityState}
                    helperText="Please select a priority"
                />
                <TaskProjectInput
                    title="Project"
                    value={projectState || ''}
                    setState={setProjectState}
                    helperText="Please select a project"
                />
                <TaskCurrentStateInput
                    title="Current State"
                    value={currentTaskState}
                    setState={setCurrentTaskState}
                    helperText="Please select a current state"
                />

            </div>

            <RichTextEditor 
                editorValue={descriptionState}
                setEditorValue={setDescriptionState}
            />

            <div className={styles.modal_footer_buttons}>
                <IconButton 
                    onClick={onClose}
                    title="Cancel"
                    icon={<CrossIcon />}
                    color="grey"
                />
                <IconButton 
                    disabled={!isEditing}
                    onClick={handleDelete}
                    title="Delete"
                    icon={<DeleteBin />}
                    color="error"
                />
                <IconButton
                    onClick={handleSubmit}
                    title="Save"
                    icon={<CheckMark />}
                />
            </div>
  
    </form>
  )
}

export default TaskForm