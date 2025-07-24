import { Typography } from "@mui/material";
import styles from "./drawer.module.scss";
import PagesSection from "./PagesSection/PagesSection";
import ToolingSection from "./ToolingSection/ToolingSection";
import HabitLineLogo from "../../../assets/Images/HabitLineLogo.png";
import StyledDivider from "../../Widgets/StyledDivider/StyledDivider";

export type DrawerProps = {
    isMobile: boolean
}

export function DrawerWebapp({ isMobile }: DrawerProps) {
    return (
        <>
            <div className={styles.logoContainer}>
                <img src={HabitLineLogo} alt="Logo" width="25" height="25" />
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Habit Line
                </Typography>
            </div>
            <StyledDivider orientation="horizontal" />

            <div className={styles.drawerContentContainer}>


                <PagesSection isMobile={isMobile} />

                <ToolingSection isMobile={isMobile} />

            </div>
        </>
    )
} 