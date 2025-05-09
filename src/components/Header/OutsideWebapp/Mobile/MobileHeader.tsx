import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"

interface NonMobileHeaderProps {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    anchorElNav: null | HTMLElement;
    activePages: string[];
}

function MobileHeader(
    { handleOpenNavMenu, handleCloseNavMenu, anchorElNav, activePages }: NonMobileHeaderProps
) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
              {activePages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
  )
}

export default MobileHeader