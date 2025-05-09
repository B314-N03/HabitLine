

export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type TaskType = 'Bug' | 'Feature' | 'ToDo' | 'Research';
export interface ITask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    priority: TaskPriority;
    taskType: TaskType;
    projectId: number;
    projectName?: string;
    projectColor?: string;
} 


export interface IProjectTasks {
    id: number;
    title: string;
    tasks: ITask[];
}