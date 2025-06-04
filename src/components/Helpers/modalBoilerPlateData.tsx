import type { ITask } from "../../Interfaces/ITask";

export const taskModalNewTaskData: ITask = {
    id: ``,
    title: ``,
    description: ``,
    taskType: `ToDo`,
    priority: `Medium`,
    status: `to_do`,
    projectId: ``,
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
    completed: false,
    comments: []
}