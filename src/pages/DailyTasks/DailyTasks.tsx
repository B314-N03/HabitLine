import { Typography } from "@mui/material"
import { useDailyTasks } from "../../hooks/useDailyTasks"
import styles from './daily_tasks.module.scss'
import DailyTaskModal from "../Modals/DailyTaskModal/DailyTaskModal"
import { useState } from "react"
import { AddButton } from "../Widgets/Buttons/AddButton"
import { dailyTaskModalNewTaskData } from "../Helpers/modalBoilerPlateData"
import DailyTaskDisplay from "../Widgets/DailyTaskDisplay/DailyTaskDisplay"


function DailyTasks(){
    const {data:dailyTasks, isLoading, error} = useDailyTasks()
    const [openModal, setOpenModal] = useState(false)
    if (isLoading) return <h1>Loading...</h1>
    if(error) return <h1>{error.message}</h1>
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return(
        <main>
            <div className={styles.dailyTasksContainer}>
                <Typography variant="h4" className={styles.dailyTasksTitle} >
                    Daily Tasks
                </Typography>
                <div className={styles.dailyTaskItems}>
                {
                    dailyTasks == null || dailyTasks.length == 0 
                    ?
                        <div className={styles.noTasks}>
                            <h1>No Daily Tasks created yet</h1>
                            <AddButton
                                onClick={() => setOpenModal(true)}
                                title="Create Daily Task"
                            />
                        </div>
                    :
                        dailyTasks?.map((task) => (
                            <DailyTaskDisplay 
                                key={task.id} 
                                dailyTask={task} 
                            />
                        ))
                }
                </div>

            </div>
            <DailyTaskModal
                isOpen={openModal}
                onClose={handleCloseModal}
                title="Create Daily Task"
                dailyTask={dailyTaskModalNewTaskData}
                />
        </main>
    )
}

export default DailyTasks