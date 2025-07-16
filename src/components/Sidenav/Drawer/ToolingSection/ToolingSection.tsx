import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import type { ISideNavTooling } from "../../../../Interfaces/ISideNavPage"
import { tooling } from "../../const"
import styles from "../drawer.module.scss"
import StyledDivider from "../../../Widgets/StyledDivider/StyledDivider"
import { useLogout } from "../../../../hooks/useAuth"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../../../providers/ThemeProvider"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ToolingSection() {
    const logout = useLogout();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const handleLogout = () => {
        logout();
    }

    const handleToggleTheme = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        toggleTheme();
    }
    tooling.find(tool => tool.title === 'Logout')!.onClick = handleLogout;

    tooling.find(tool => tool.title === 'Toggle Theme')!.icon = theme === 'dark' ?
        <LightModeIcon /> : <DarkModeIcon />;
    useEffect(() => {
        tooling.find(tool => tool.title === 'Toggle Theme')!.icon = theme === 'dark' ?
            <LightModeIcon /> : <DarkModeIcon />;
    }, [theme]);
    tooling.find(tool => tool.title === 'Toggle Theme')!.onClick = handleToggleTheme;

    return (
        <List>
            <StyledDivider orientation="horizontal" />

            <Typography variant="h6" sx={{ padding: '15px ', fontWeight: 'bold' }}>
                Tooling
            </Typography>
            {tooling.map((page: ISideNavTooling) => {
                const isButton = page.type === 'button';
                return isButton ? (
                    <ListItem key={page.title} disablePadding>
                        <ListItemButton onClick={page.onClick} className={styles.sidenavButton}>
                            <ListItemIcon sx={{ color: 'var(--text-main)' }}>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText primary={page.title} />
                        </ListItemButton>
                    </ListItem>
                ) :
                    (
                        <NavLink key={page.title} to={page.path} style={{ textDecoration: 'none', color: 'var(--text-main)' }}>
                            <ListItem key={page.title} disablePadding>
                                <ListItemButton className={`${location.pathname === page.path ? styles.sidenavActiveLink : ''}`}>
                                    <ListItemIcon sx={{ color: 'var(--text-main)' }}>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={page.title} />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    )
            })}
        </List>
    )
}

export default ToolingSection