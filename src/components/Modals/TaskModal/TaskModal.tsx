import { useEffect, useState } from "react";
import { useCreateOrUpdateTask, useDeleteTask } from "../../../hooks/useTasks";
import type { ITask } from "../../../Interfaces/ITask";
import TaskForm from "../../Forms/TaskForm/TaskForm";
import BaseModal from "../BaseModal/BaseModal";

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalTitle: string;
    task: ITask;
    isEditing?: boolean;
    setOpenSnackBar?: (open: boolean) => void;
    setSnackBarMessage?: (message: string) => void;
}

function TaskModal({
    isOpen,
    onClose,
    modalTitle,
    isEditing = false,
    task,
    setOpenSnackBar = () => {},
    setSnackBarMessage = () => {},
} : TaskModalProps) {
    const id = task.id;
    const [titleState, setTitleState] = useState(task.title);
    const [descriptionState, setDescriptionState] = useState(task.description);
    const [taskTypeState, setTaskTypeState] = useState(task.taskType);
    const [priorityState, setPriorityState] = useState(task.priority);
    const [projectState, setProjectState] = useState(task.projectId);
    const [currentTaskState, setCurrentTaskState] = useState(task.status);
    const mutation = useCreateOrUpdateTask();
    const deleteMutation = useDeleteTask();

    useEffect(() => {
        if (isOpen && task) {
            setTitleState(task.title);
            setDescriptionState(task.description);
            setTaskTypeState(task.taskType);
            setPriorityState(task.priority);
            setProjectState(task.projectId);
            setCurrentTaskState(task.status);
        }
    }, [isOpen, task]);

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
                    if(setOpenSnackBar) setOpenSnackBar(true);
                    if(setSnackBarMessage) setSnackBarMessage(`Task ${isEditing ? 'updated' : 'created'} successfully`);
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

    const handleCancel = () => {
        setTitleState('');
        setDescriptionState('');
        setPriorityState('Low');
        setTaskTypeState('Bug');
        setCurrentTaskState('to_do');
        setProjectState('');
        onClose();
    }

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            size="large"
            title={modalTitle}
            showFooter={true}
            displayedButtons={["cancel", "delete", "save"]}
            onDelete={handleDelete}
            onSave={handleSubmit}
            onCancel={handleCancel}
            isEditing={isEditing}
        >
            <TaskForm
                createdAt={task.createdAt}
                lastUpdatedAt={task.lastUpdatedAt}
                taskTypeState={taskTypeState}
                setTaskTypeState={setTaskTypeState}
                titleState={titleState}
                setTitleState={setTitleState}
                descriptionState={descriptionState}
                setDescriptionState={setDescriptionState}
                priorityState={priorityState}
                setPriorityState={setPriorityState}
                projectState={projectState}
                setProjectState={setProjectState}
                currentTaskState={currentTaskState}
                setCurrentTaskState={setCurrentTaskState}
            />
         

        </BaseModal>
    )
}

export default TaskModal