import { TextareaAutosize } from "@mui/material"
import styles from "./task_description_input.module.scss"
interface TaskDescriptionInputProps {
    descriptionState: string
    setDescriptionState: React.Dispatch<React.SetStateAction<string>>
}

function TaskDescriptionInput({
    descriptionState,
    setDescriptionState
}: TaskDescriptionInputProps) {
  return (
    <TextareaAutosize
        minRows={10}
        placeholder="Description"
        value={descriptionState}
        onChange={(e) => setDescriptionState(e.target.value)}
        className={styles.taskDescriptionInput}
    />
  )
}

export default TaskDescriptionInput