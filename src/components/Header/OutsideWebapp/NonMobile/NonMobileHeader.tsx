import { Box, Button, Typography } from "@mui/material"

interface NonMobileHeaderProps {
    handleCloseNavMenu: () => void;
    activePages: string[];
}

function NonMobileHeader(
    { handleCloseNavMenu, activePages }: NonMobileHeaderProps
) {
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Habit Line
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {activePages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
          </Box>
        </>

    )
}

export default NonMobileHeader