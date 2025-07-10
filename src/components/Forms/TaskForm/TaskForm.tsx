import styles from './taskform.module.scss'
import type { ITaskFrontend } from "../../../Interfaces/ITask";
import TaskTypeInput from "./TaskTypeInput/TaskTypeInput";
import TaskPriorityInput from "./TaskPriorityInput/TaskPriorityInput";
import TaskProjectInput from "./TaskProjectInput/TaskProjectInput";
import TaskCurrentStateInput from "./TaskCurrentStateInput/TaskCurrentStateInput";
import RichTextEditor from "../FormWidgets/RichtTextEditor/RichTextEditor";
import CommentSection from '../FormWidgets/CommentSection/CommentSection';
import formatDateHumanFriendly from '../../Helpers/FormatDateHumanFriendly';
import StyledTextField from '../../StyledComponents/StyledTextField/StyledTextField';

interface TaskFormProps {
    createdAt: Date;
    lastUpdatedAt: Date;
    taskTypeState: ITaskFrontend['taskType'];
    setTaskTypeState: (value: ITaskFrontend['taskType']) => void;
    titleState: string;
    setTitleState: (value: string) => void;
    descriptionState: string;
    setDescriptionState: (value: string) => void;
    priorityState: ITaskFrontend['priority'];
    setPriorityState: (value: ITaskFrontend['priority']) => void;
    projectState: ITaskFrontend['projectId'];
    setProjectState: (value: ITaskFrontend['projectId']) => void;
    currentTaskState: ITaskFrontend['status'];
    setCurrentTaskState: (value: ITaskFrontend['status']) => void;
    comments: string[];
    onAddComment: (comment: string) => void;
    onDeleteComment: (index: number) => void;
    onEditComment: (index: number, newComment: string) => void;
    isEditing?: boolean
}

function TaskForm({
    createdAt,
    lastUpdatedAt,
    taskTypeState,
    setTaskTypeState,
    titleState,
    setTitleState,
    descriptionState,
    setDescriptionState,
    priorityState,
    setPriorityState,
    projectState,
    setProjectState,
    currentTaskState,
    setCurrentTaskState,
    comments,
    onAddComment,
    onDeleteComment,
    onEditComment,
    isEditing = false
} : TaskFormProps) {
    const createdAtDate = formatDateHumanFriendly(createdAt, true);
    const updatedAtDate = formatDateHumanFriendly(lastUpdatedAt, true);
    return (
    <form className={styles.taskform}>
            <div className={styles.taskFormHeader}>
                <StyledTextField
                    label="Title"
                    value={titleState}
                    onChange={(e) => setTitleState(e.target.value)} 
                    className={styles.taskFormHeaderTitle}
                    sx={{ width: '30%' }}
                />
                {isEditing && <div className={styles.taskFormHeaderRight}>
                    <div className={styles.taskFormHeaderRightItem}>
                        Created At: <span>{createdAtDate}</span>
                    </div>
                    <div className={styles.taskFormHeaderRightItem}>
                        Updated At: <span>{updatedAtDate}</span>
                    </div>
                </div>}
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

           {isEditing && <CommentSection 
                comments={comments}
                onAddComment={onAddComment}
                onDeleteComment={onDeleteComment}
                onEditComment={onEditComment}
            />}
    </form>
  )
}

export default TaskForm