import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NonMobileSideNav from './NonMobile/NonMobileSidenav';
import MobileSideNav from './Mobile/MobileSideNav';

export default function SideNav() {
    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <NonMobileSideNav/>
            <MobileSideNav/>
        </Box>
    );
}
