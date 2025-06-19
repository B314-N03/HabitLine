import { Card, Typography } from "@mui/material"
import baseStyles from "../../dashboard.module.scss"
import { useDailyTasks } from "../../../../hooks/useDailyTasks"
import DailyTaskDisplay from "../../../Widgets/DailyTaskDisplay/DailyTaskDisplay"

function DailyTasksCard() {
    const {data: dailyTasks, isLoading,isError} = useDailyTasks()
    return (
        <Card className={baseStyles.dashboard_card} elevation={6}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Daily Tasks:
            </Typography> 
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error loading daily tasks.</p>
                ) : dailyTasks && dailyTasks.length > 0 ? (
                        dailyTasks.map((task) => (
                            <DailyTaskDisplay
                                dailyTask={task}
                            />
                        ))
                ) : (
                    <p>No daily tasks found.</p>
                )
            }

        </Card>
    )
}

export default DailyTasksCard