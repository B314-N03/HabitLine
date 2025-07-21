import { Card, Typography } from '@mui/material'
import baseStyles from '../../dashboard.module.scss'
import { useMe } from '../../../../hooks/useAuth'
import formatDateHumanFriendly from '../../../../components/Helpers/FormatDateHumanFriendly'
import { useEffect, useState } from 'react'

function UserCard() {
    const { data: user } = useMe()
    const username = user?.username || ''
    const lastLoginDate = user?.lastLoginAt ? new Date(user.lastLoginAt) : null
    const dayTime = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"

    // extract formatting into a reusable helper
    const formatTime = (date: Date) => {
        return date.getHours().toString().padStart(2, '0') + ':' +
            date.getMinutes().toString().padStart(2, '0') + ':' +
            date.getSeconds().toString().padStart(2, '0');
    };
    // initialize state using the helper
    const [currentTime, setCurrentTime] = useState(formatTime(new Date()));


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().getHours().toString().padStart(2, '0') + ':' + new Date().getMinutes().toString().padStart(2, '0') + ':' + new Date().getSeconds().toString().padStart(2, '0'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card className={baseStyles.dashboard_card} elevation={6} sx={{ flex: ".5 !important" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Good {dayTime}, {username}!
            </Typography>
            <Typography variant="body1" component="p">Current time: {currentTime}</Typography>
            <Typography variant="body1" component="p">Last login: {lastLoginDate ? formatDateHumanFriendly(lastLoginDate) : 'N/A'}</Typography>
        </Card>
    )
}

export default UserCard