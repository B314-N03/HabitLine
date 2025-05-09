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
          paddingBottom: '10px'
        },
      }}
      open
    >
      <DrawerWebapp />
    </Drawer>
  );
}

export default NonMobileSideNav;