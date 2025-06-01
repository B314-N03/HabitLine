import { Drawer} from "@mui/material";
import { drawerWidth } from "../const";
import { DrawerWebapp } from "../Drawer/Drawer";


function NonMobileSideNav() {
  return(
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box',
          width: drawerWidth,
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