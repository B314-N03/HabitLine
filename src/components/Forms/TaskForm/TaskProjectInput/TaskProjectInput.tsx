import { MenuItem } from "@mui/material";
import styles from "./task_project_input.module.scss";
import { useProjects } from "../../../../hooks/useProjects";
import SelectHL from "../../../Widgets/Select/SelectHL";
interface ITaskProjectInputProps {
    title: string;
    value: string;
    setState: (state: string) => void;
    error?: boolean;
    helperText?: string
}

function TaskProjectInput({
    value,
    setState,
    title,
    error = false,
    helperText
}: ITaskProjectInputProps) {
    const { data: projects } = useProjects();

    return (
        <SelectHL<string>
            title={title}
            value={value}
            setState={setState}
            error={error}
            helperText={helperText}>
            {
                projects?.map((project) => (
                    <MenuItem key={project.id} value={project.id} className={styles.taskProject}>
                        {project.title}
                    </MenuItem>
                ))
            }

        </SelectHL>
    )
}

export default TaskProjectInput