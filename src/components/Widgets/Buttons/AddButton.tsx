import { Button } from "@mui/material";
import PlusIcon from "@mui/icons-material/Add";

interface AddButtonProps {
    onClick: () => void;
    disabled?: boolean;
    variant?: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
    title: string;
}

export const AddButton = (
    { onClick, disabled = false, variant = "contained", size = "medium", title }: AddButtonProps
) => {
    return (
        <Button
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
            startIcon={<PlusIcon />}
        >
            {title}
        </Button>
            
    );
}