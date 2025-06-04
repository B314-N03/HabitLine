import { Card, Typography } from "@mui/material"
import styles from "./quick_stats.module.scss"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserProvider"
import dashboardStyles from "../dashboard.module.scss"
import formatDateHumanFriendly from "../../Helpers/FormatDateHumanFriendly"

function QuickStats() {
    const {username, lastLoginDate} = useContext(UserContext)
    const dayTime = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"
  return (
    <div className={styles.quickStatsContainer}>
        <Card className={dashboardStyles.dashboard_card} elevation={6} sx={{flex:1}}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Good {dayTime}, {username}!
            </Typography>
            <div className={styles.quickStatsInfoContainer}>
                <div className={styles.quickStatsInfoItem}>
                    <span>Username: </span>
                    <span>{username}</span>
                </div>
                <div className={styles.quickStatsInfoItem}>
                    <span>Last Login: </span>
                    <span>{formatDateHumanFriendly(lastLoginDate,true)}</span>
                </div>
                <div className={styles.quickStatsInfoItem}>
                    <span>Created At: </span>
                    <span>{new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
            </div>
        </Card>
        <Card className={dashboardStyles.dashboard_card} elevation={6} sx={{flex:2}}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Daily Tasks:
            </Typography> 

        </Card>
        <Card className={dashboardStyles.dashboard_card} elevation={6} >
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Done Tasks Today:
            </Typography> 

        </Card>
    </div>

    )
}

export default QuickStats