import { Drawer } from "@mui/material";
import { drawerWidth, drawerWidthClosed } from "../const";
import { DrawerWebapp } from "../Drawer/Drawer";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";


function NonMobileSideNav() {
  const { hideSidenavText: hideText } = useContext(ThemeContext);
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: !hideText ? drawerWidth : drawerWidthClosed,
          height: `100%`,
          backgroundColor: 'var(--bg-main)',
          paddingBottom: '10px',
          color: 'var(--text-main)',
          borderRight: '1px solid var(--divider-border-color)',
        },
      }}
      open
    >
      <DrawerWebapp />
    </Drawer>
  );
}

export default NonMobileSideNav;