import { TextareaAutosize } from "@mui/material"
import styles from "./project_description_input.module.scss"
interface ProjectDescriptionInputProps {
    descriptionState: string
    setDescriptionState: React.Dispatch<React.SetStateAction<string>>
}

function ProjectDescriptionInput({
    descriptionState,
    setDescriptionState
}: ProjectDescriptionInputProps) {
  return (
    <TextareaAutosize
        minRows={10}
        placeholder="Description"
        value={descriptionState}
        onChange={(e) => setDescriptionState(e.target.value)}
        className={styles.projectDescriptionInput}
    />
  )
}

export default ProjectDescriptionInput