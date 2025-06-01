import { Divider, type SxProps } from "@mui/material";

interface IStyledDividerProps {
    orientation: "horizontal" | "vertical";
    customClass?: string;
    customSX?: SxProps;
    flexItem?: boolean;
    props?: any
}

export default function StyledDivider({ orientation, customClass,flexItem,customSX,...props }: IStyledDividerProps) {
    return <Divider 
                sx={{ borderColor: 'var(--divider-border-color)', ...customSX }}
                orientation={orientation} className={customClass} flexItem={flexItem}  {...props} />;
}