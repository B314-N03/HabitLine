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
            <label className={styles.styledSelectLabel}>{title}</label>
            <Select
                value={value}
                onChange={handleChange}
                label={title}
                className={styles.styledSelect}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid var(--divider-border-color-secondary)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid var(--divider-border-color)',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid var(--divider-border-color)',
                    },
                    '& .MuiSelect-icon': {
                        color: 'var(--text-main)',
                    },
                    color: 'var(--text-main)'
                }}
            >
                {children}
            </Select>
            {helperText && !value && <FormHelperText sx={{ color: 'var(--text-main)' }}>{helperText}</FormHelperText>}
        </FormControl>
    );
}

export default SelectHL