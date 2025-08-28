import { useEffect, useState } from "react";
import { useCreateOrUpdateTask, useDeleteTask } from "../../../hooks/useTasks";
import type { ITask } from "../../../Interfaces/ITask";
import TaskForm from "../../Forms/TaskForm/TaskForm";
import BaseModal from "../BaseModal/BaseModal";
import { useMe } from "../../../hooks/useAuth";
import type { IComment } from "../../../Interfaces/IComment";

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
    setOpenSnackBar = () => { },
    setSnackBarMessage = () => { },
}: TaskModalProps) {
    const { data: user } = useMe();
    const userId = user?.id || '';
    const id = task.id;
    const [titleState, setTitleState] = useState(task.title);
    const [descriptionState, setDescriptionState] = useState(task.description);
    const [taskTypeState, setTaskTypeState] = useState(task.taskType);
    const [priorityState, setPriorityState] = useState(task.priority);
    const [projectState, setProjectState] = useState(task.projectId);
    const [currentTaskState, setCurrentTaskState] = useState(task.status);
    const [commentState, setCommentState] = useState<Partial<IComment>[]>(task.comments);
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
                comments: commentState,
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
                    setCommentState([]);
                    onClose();
                    if (setOpenSnackBar && setSnackBarMessage) {
                        setOpenSnackBar(true);
                        const message = isEditing ? "Task updated successfully!" : "Task created successfully!";
                        setSnackBarMessage(message);
                    }
                },
            },
        )
    }
    const handleDelete = () =>
        deleteMutation.mutate(
            id,
            {

                onSuccess: () => {
                    setTitleState('');
                    setDescriptionState('');
                    setPriorityState('Low');
                    setTaskTypeState('Bug');
                    setCurrentTaskState('to_do');
                    setProjectState('');
                    setCommentState([]);
                    onClose()
                }
            }
        );

    const handleCancel = () => {
        setTitleState('');
        setDescriptionState('');
        setPriorityState('Low');
        setTaskTypeState('Bug');
        setCurrentTaskState('to_do');
        setProjectState('');
        setCommentState([]);
        onClose();
    }

    const handleAddComment = (comment: string) => {
        setCommentState((prevComments: Partial<IComment>[]) => [...prevComments, { content: comment, author: userId, task_id: id }]);
    }

    const handleDeleteComment = (index: number) => {
        setCommentState((prevComments: Partial<IComment>[]) => prevComments.filter((_, i) => i !== index));
    }

    const handleEditComment = (index: number, newComment: string) => {
        setCommentState((prevComments: Partial<IComment>[]) => {
            const updatedComments = [...prevComments];
            updatedComments[index] = { ...updatedComments[index], content: newComment };
            return updatedComments;
        });
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
                comments={commentState}
                onAddComment={handleAddComment}
                onDeleteComment={handleDeleteComment}
                onEditComment={handleEditComment}
                isEditing={isEditing}
            />


        </BaseModal>
    )
}

export default TaskModal