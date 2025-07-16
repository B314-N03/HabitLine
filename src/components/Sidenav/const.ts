import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/TrendingUp';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import SupportIcon from '@mui/icons-material/Support';
import type { ISideNavPage, ISideNavTooling } from '../../Interfaces/ISideNavPage';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ChecklistIcon from '@mui/icons-material/Checklist';

export const drawerWidth = 240;

export const pages: ISideNavPage[] = [
    {
        title: 'Dashboard',
        icon: React.createElement(HomeIcon),
        path: '/dashboard'
    },
    {
        title: 'Tasks',
        icon: React.createElement(CalendarViewWeekIcon),
        path: '/tasks'
    },
    {
        title: 'Daily Tasks',
        icon: React.createElement(ChecklistIcon),
        path: '/daily-tasks'
    },
    {
        title: 'Analytics',
        icon: React.createElement(AnalyticsIcon),
        path: '/analytics'
    },
];

export const tooling: ISideNavTooling[] = [
    {
        title: 'Settings',
        icon: React.createElement(SettingsIcon),
        path: '/settings',
        type: 'link'
    },
    {
        title: 'Toggle Theme',
        icon: React.createElement(ChangeCircleIcon),
        path: '/toggle-theme',
        type: 'button'
    },
    {
        title: 'Changelogs',
        icon: React.createElement(ChangeCircleIcon),
        path: '/changelogs',
        type: 'link'
    },
    {
        title: 'Support',
        icon: React.createElement(SupportIcon),
        path: '/support',
        type: 'link'
    },
    {
        title: 'Feedback',
        icon: React.createElement(FeedbackIcon),
        path: '/feedback',
        type: 'link'
    },
    {
        title: 'Logout',
        icon: React.createElement(LogoutIcon),
        path: '/logout',
        type: 'button',
    }
]