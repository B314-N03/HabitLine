import { useState } from "react";
import styles from './ProjectForm.module.scss'
import { Input } from "@mui/material";
import CheckMark from '@mui/icons-material/Check';
import DeleteBin from '@mui/icons-material/Delete';
import CrossIcon from '@mui/icons-material/Clear';
import IconButton from "../../Widgets/Cards/Buttons/IconButton";
import type { IProject } from "../../../Interfaces/IProject";
import TaskDescriptionInput from "../TaskForm/TaskDescriptionInput/TaskDescriptionInput";
import ProjectColorInput from "./ProjectColorInput/ProjectColorInput";
import { useCreateOrUpdateProject } from "../../../hooks/useProjects";

interface ProjectFormProps {
    project: IProject,
    onClose: () => void,
    isEditing: boolean
}

function ProjectForm({
   project: { title, description, projectColor, id },
    onClose,
    isEditing = false
}: ProjectFormProps) {
    const [titleState, setTitleState] = useState(title);
    const [descriptionState, setDescriptionState] = useState(description);
    const [projectColorState, setProjectColorState] = useState(projectColor);
    const mutation = useCreateOrUpdateProject();
    const handleSubmit = () => {
        mutation.mutate(
            {
                id,
                title: titleState,
                description: descriptionState,
                projectColor: projectColorState,
                isEditing
            },
            {
                onSuccess: () => {
                    setTitleState('');
                    setDescriptionState('');
                    setProjectColorState('');
                    onClose();
                },
            },
        )
    }

    return (
    <form className={styles.projectform}>
            <div className={styles.projectformHeader}>
                <Input 
                    placeholder="Title"
                    value={titleState}
                    onChange={(e) => setTitleState(e.target.value)} 
                    className={styles.projectformHeaderTitle}
                    sx={{ width: '30%' }}
                />
                <div className={styles.projectformHeaderRight}>
                    <div className={styles.projectformHeaderRightItem}>
                        Created At: <span>{new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className={styles.projectformHeaderRightItem}>
                        Updated At: <span>{new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                </div>
            </div>
            
            <ProjectColorInput 
                colorState={projectColorState}
                setColorState={setProjectColorState}
            />
           
            <TaskDescriptionInput 
                descriptionState={descriptionState}
                setDescriptionState={setDescriptionState}
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
                    onClick={onClose}
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

export default ProjectForm