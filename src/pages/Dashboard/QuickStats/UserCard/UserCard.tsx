import { Card, Typography } from '@mui/material'
import baseStyles from '../../dashboard.module.scss'
import { useMe } from '../../../../hooks/useAuth'
import formatDateHumanFriendly from '../../../../components/Helpers/FormatDateHumanFriendly'

function UserCard() {
    const { data: user } = useMe()
    const username = user?.username || ''
    const lastLoginDate = user?.lastLoginAt ? new Date(user.lastLoginAt) : null
    const dayTime = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"

    return (
        <Card className={baseStyles.dashboard_card} elevation={6} sx={{ flex: ".5 !important" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Good {dayTime}, {username}!
            </Typography>
            <p>Last login: {lastLoginDate ? formatDateHumanFriendly(lastLoginDate) : 'N/A'}</p>
        </Card>
    )
}

export default UserCard