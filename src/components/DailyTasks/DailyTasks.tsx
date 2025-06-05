import { Button, Checkbox } from "@mui/material"
import { useDailyTasks } from "../../hooks/useDailyTasks"



function DailyTasks(){
    const {data:dailyTasks, isLoading, error} = useDailyTasks()

    if (isLoading) return <h1>Loading...</h1>
    if(error) return <h1>{error.message}</h1>

    return(
        <main >
            {
                dailyTasks == null || dailyTasks.length == 0 
                ?
                    <div style={{color:"white"}}>
                        <h1>No Daily Tasks created yet</h1>
                        <Button variant="contained">Create Task</Button>
                    </div>
                :
                    dailyTasks?.map((task) => (
                        <div key={task.id}>
                            <Checkbox checked={task.completed} />
                            <h1>{task.title}</h1>
                        </div>
                    ))
            }
        </main>
    )
}

export default DailyTasks