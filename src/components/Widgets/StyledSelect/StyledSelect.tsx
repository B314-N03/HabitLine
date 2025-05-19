import type { SelectChangeEvent } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { taskTypeMap } from "../../Helpers/TaskTypeMap";
import styles from "./task_type_input.module.scss";
import type { JSX } from "@emotion/react/jsx-runtime";

interface StyledSelectProps {
    title: string;
    value: string;
    onChange: (e: SelectChangeEvent) => void;
    helperText?: string;
    error?: boolean;
    options: string[] | JSX.Element[] | { [key: string]: JSX.Element };
    isArray?: boolean;
}

function TaskTypeInput({
    title,
    value,
    onChange,
    helperText,
    error = false,
    options,
    isArray = false
}: StyledSelectProps){
    return (
        <FormControl fullWidth error={error}>
            <InputLabel>{title}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label={title}
                className={styles.taskTypeSelect}
            >
                {   !isArray ?
                    Object.keys(options).map((actualOption) => (
                        <MenuItem key={actualOption} value={actualOption} className={styles.taskType}>
                            {options[actualOption]}
                            {actualOption}
                        </MenuItem>
                    ))
                    : 
                    options.map((option) => (
                        <MenuItem key={option} value={option} className={styles.taskType}>
                            {option}
                        </MenuItem>
                    ))
                }
            </Select>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}

export default TaskTypeInput;
