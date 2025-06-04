

export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type TaskType = 'Bug' | 'Feature' | 'ToDo' | 'Research';
export type TaskStatus = 'on_hold' | 'to_do' | 'in_progress' | 'in_review' | 'done';

export interface ITaskFrontend {
    id: string;
    title: string;
    description: string;
    priority: TaskPriority;
    taskType: TaskType;
    projectId: string;
    status: TaskStatus;
    comments: string[]
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    lastUpdatedAt: Date;
    priority: TaskPriority;
    taskType: TaskType;
    projectId: string;
    status: TaskStatus;
    comments: string[]
} 


export interface IProjectTasks {
    id: number;
    title: string;
    tasks: ITask[];
}