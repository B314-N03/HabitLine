import { Divider, Typography } from "@mui/material";
import styles from "./drawer.module.scss";
import PagesSection from "./PagesSection/PagesSection";
import ToolingSection from "./ToolingSection/ToolingSection";

export function DrawerWebapp() {
    return (
        <>
            <div className={styles.logoContainer}>
                <img src="/logo.png" alt="Logo" />
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold'}}>
                Habit Line
                </Typography>
            </div>
            <Divider />

            <div className={styles.drawerContentContainer}>

                
                <PagesSection />
                
                <ToolingSection />

            </div>
        </>
    )
} 