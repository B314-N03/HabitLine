import { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { UserContext } from '../../../providers/UserProvider';
import { useLocation } from 'react-router-dom';
import MobileHeader from './Mobile/MobileHeader';
import NonMobileHeader from './NonMobile/NonMobileHeader';
import StyledDivider from '../../Widgets/StyledDivider/StyledDivider';
import LoginModal from '../../Modals/LoginModal/LoginModal';


function HeaderOutsideWebapp() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { loggedIn, username, avatar} = useContext(UserContext);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const location = useLocation();  
  const pagesSplash = ['Features', 'Pricing', 'Blog'];
  const pagesDashboard = [""];
  const [pathIsSplashScreen, setPathIsSplashScreen] = useState(location.pathname === '/'); 
  const activePages = pathIsSplashScreen ? pagesSplash : pagesDashboard;
  
  useEffect(() => {
    setPathIsSplashScreen(location.pathname === '/');
  }, [location.pathname]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleClickLogin = () => {
    setOpenLoginModal(true);
  };

  return null; 
  
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'var(--bg-main)', zIndex: 1300 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileHeader 
            handleOpenNavMenu={handleOpenNavMenu} 
            handleCloseNavMenu={handleCloseNavMenu} 
            anchorElNav={anchorElNav} 
            activePages={activePages}
          ></MobileHeader>
         
         <NonMobileHeader
            handleCloseNavMenu={handleCloseNavMenu} 
            activePages={activePages}
          ></NonMobileHeader>

          {loggedIn ? 
            <Box sx={{ flexGrow: 0 }}>
              <Avatar alt={username} src={avatar} />
            </Box> 
          : 
            <Box sx={{ flexGrow: 0 }}>
              <Button variant="contained" color="primary" onClick={handleClickLogin}>
                Login
              </Button>
            </Box>}
        </Toolbar>
      </Container>
      <StyledDivider orientation="horizontal"/>
      <LoginModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      />
    </AppBar>
  );
}
export default HeaderOutsideWebapp;
