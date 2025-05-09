import type { ITask } from "../../../Interfaces/ITask";
import TaskForm from "../../Forms/TaskForm/TaskForm";
import BaseModal from "../BaseModal/BaseModal";

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    task: ITask
}

function TaskModal({
    isOpen,
    onClose,
    title,
    task
} : TaskModalProps) {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            size="large"
            title={title}
        >
            <TaskForm task={task} />
        </BaseModal>
    )
}

export default TaskModal