import styles from './projectform.module.scss'
import ProjectColorInput from "./ProjectColorInput/ProjectColorInput";
import RichTextEditor from "../FormWidgets/RichtTextEditor/RichTextEditor";
import StyledTextField from '../../StyledComponents/StyledTextField/StyledTextField';

interface ProjectFormProps {
    titleState: string;
    setTitleState: (value: string) => void;
    projectColorState: string;
    setProjectColorState: React.Dispatch<React.SetStateAction<string>>;
    descriptionState: string;
    setDescriptionState: (value: string) => void;
}

function ProjectForm({
    titleState,
    setTitleState,
    projectColorState,
    setProjectColorState,
    descriptionState,
    setDescriptionState
}: ProjectFormProps) {


    return (
        <form className={styles.projectform}>
            <div className={styles.projectformHeader}>
                <StyledTextField
                    label="Project Name"
                    value={titleState}
                    onChange={(e) => setTitleState(e.target.value)}
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

            <RichTextEditor
                editorValue={descriptionState}
                setEditorValue={setDescriptionState}
            />

        </form>
    )
}

export default ProjectForm