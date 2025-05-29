import type { JSX } from "@emotion/react/jsx-runtime";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


interface LinkButtonProps {
    href: string;
    title: string;
    customClass?: string;
    icon?: JSX.Element;
    variant?: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    disabled?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top"
}
function LinkButton({
    href,
    title,
    customClass,
    icon,
    variant = "contained",
    size = "medium",
    onClick,
    disabled = false,
    target = "_self",

}: LinkButtonProps) {

  return (
    <Link 
        to={href}
        target={target}
    >
        <Button
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
            startIcon={icon}
            className={customClass}
        >
            {title}
        </Button>
    </Link>
  )
}

export default LinkButton;