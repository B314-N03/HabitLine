import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import type { ISideNavPage } from "../../../../Interfaces/ISideNavPage"
import { pages } from "../../const"
import styles from "../drawer.module.scss"


function PagesSection() {
    return (
        <List>
            <Typography variant="h6" sx={{ padding: '15px ', fontWeight: 'bold' }}>
                Pages
            </Typography>
            {pages.map((page: ISideNavPage) => (
                <NavLink key={page.title} to={page.path} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem key={page.title} disablePadding>
                        <ListItemButton className={`${location.pathname === page.path ? styles.sidenavActiveLink : ''}`}>
                            <ListItemIcon>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText primary={page.title} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}
            
            <Divider />

        </List>
    )
}

export default PagesSection