import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import type { ISideNavPage } from "../../../../Interfaces/ISideNavPage"
import { pages } from "../../const"
import styles from "../drawer.module.scss"
import StyledDivider from "../../../Widgets/StyledDivider/StyledDivider"
import type { DrawerProps } from "../Drawer"


function PagesSection({ isMobile }: DrawerProps) {
    return (
        <List>
            {!isMobile && <Typography variant="h6" sx={{ padding: '15px ', fontWeight: 'bold' }}>
                Pages
            </Typography>}
            {pages.map((page: ISideNavPage) => (
                <NavLink key={page.title} to={page.path} style={{ textDecoration: 'none', color: 'var(--text-main)' }}>
                    <ListItem key={page.title} disablePadding>
                        <ListItemButton className={`${location.pathname === page.path ? styles.sidenavActiveLink : ''}`}>
                            <ListItemIcon sx={{ color: 'var(--text-main)' }}>
                                {page.icon}
                            </ListItemIcon>
                            {!isMobile && <ListItemText primary={page.title} />}
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}

            <StyledDivider orientation="horizontal" />

        </List>
    )
}

export default PagesSection