import type { JSX } from "@emotion/react/jsx-runtime"
import { Button } from "@mui/material"
import styles from "./button_styles.module.scss"

interface IconButtonProps {
    onClick?: () => void
    disabled?: boolean
    variant?: "text" | "outlined" | "contained"
    size?: "small" | "medium" | "large"
    title: string,
    icon: JSX.Element,
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | "grey",
    customClass?: string,
    contentCustomClass?: string
}

function IconButtonHL({
    onClick,
    disabled = false,
    variant = "contained",
    size = "medium",
    title,
    icon,
    color = "primary",
    customClass = "",
    contentCustomClass = ""
}: IconButtonProps) {
  return (
    <Button 
        variant={variant}
        size={size}
        onClick={onClick}
        disabled={disabled}
        startIcon={icon}
        title={title}
        color={color === "grey" ? "inherit" : color}
        className={`${customClass} ${color === "grey" ? styles.greyButton : ""}`}
    >
      <div className={`${contentCustomClass} ${styles.iconButtonContent}`}>
        {title}
      </div>
    </Button>
  )
}

export default IconButtonHL