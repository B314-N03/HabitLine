import { FormControl, FormHelperText, Select, type SelectChangeEvent } from "@mui/material";
import type { ReactNode } from "react";
import styles from "./select_hl.module.scss";
interface SelectHLProps<T> {
    title: string;
    value: string;
    setState: (state: T) => void;
    error?: boolean;
    helperText?: string;
    children: ReactNode;
}

function SelectHL<T extends string>({
    title,
    value,
    setState,
    error = false,
    helperText,
    children,
}: SelectHLProps<T>) {
    const handleChange = (event: SelectChangeEvent) => {
        const eventValue = event.target.value as T;
        setState(eventValue);
    }
    return (
        <FormControl fullWidth error={error}>
            <Select
                value={value}
                onChange={handleChange}
                label={title}
                className={styles.styledSelect}
            >
                {children}
            </Select>
            {helperText && !value && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}

export default SelectHL