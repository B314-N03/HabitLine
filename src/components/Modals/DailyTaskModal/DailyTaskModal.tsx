import { Input } from "@mui/material";
import BaseModal from "../BaseModal/BaseModal";
import styles from "./daily_task_modal.module.scss";
import { useCreateOrUpdateDailyTask } from "../../../hooks/useDailyTasks";
import type { IDailyTask } from "../../../Interfaces/IDailyTask";
import { useState } from "react";

interface DailyTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    dailyTask: IDailyTask;
    isEditing?: boolean;
}

function DailyTaskModal({
    isOpen,
    onClose,
    title,
    dailyTask,
    isEditing = false,
}: DailyTaskModalProps) {
    const mutation = useCreateOrUpdateDailyTask();
    const id = dailyTask.id;
    const [titleState, setTitleState] = useState(dailyTask.title);
    const handleSave = () => {
        // Logic to save the daily task
        mutation.mutate({
            id,
            title: titleState,
            completed: false,
            isEditing,
        });
        onClose();
    };
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            size="fit_content"
            title={title}
            displayedButtons={["cancel", "save", "delete"]}
            showFooter
            onSave={handleSave}
            onDelete={() => { }}
        >
            <div className={styles.dailyTaskModalContent}>
                <Input
                    placeholder="Title"
                    value={titleState}
                    onChange={(e) => setTitleState(e.target.value)}
                    className={styles.titleInput}
                    title="Title of the daily task"
                />
            </div>


        </BaseModal>
    )
}

export default DailyTaskModal
