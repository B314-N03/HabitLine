import { Box, Drawer } from "@mui/material"
import { drawerWidth } from "../const"
import { DrawerWebapp } from "../Drawer/Drawer"
import { useState } from "react";

function MobileSideNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };


    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: { xs: 'block', sm: 'none' } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={window.document.body}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                slotProps={{
                    root: {
                        keepMounted: true,
                    },
                }}
            >
                <DrawerWebapp isMobile />
            </Drawer>
        </Box>
    )
}

export default MobileSideNav