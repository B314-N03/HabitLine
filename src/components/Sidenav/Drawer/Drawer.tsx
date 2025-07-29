import { Typography } from "@mui/material";
import styles from "./drawer.module.scss";
import PagesSection from "./PagesSection/PagesSection";
import ToolingSection from "./ToolingSection/ToolingSection";
import HabitLineLogo from "../../../assets/Images/HabitLineLogo.png";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";

export function DrawerWebapp() {
    const { hideSidenavText: hideText, toggleSidenavText } = useContext(ThemeContext);
    return (
        <>
            <div className={styles.logoContainer}>
                <img src={HabitLineLogo} alt="Logo" width="25" height="25" />
                {!hideText && <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Habit Line
                </Typography>}
            </div>

            <div className={styles.drawerContentContainer}>
                <PagesSection hideText={hideText} />

                <ToolingSection hideText={hideText} toggleSidenavText={toggleSidenavText} />

            </div>
        </>
    )
} 