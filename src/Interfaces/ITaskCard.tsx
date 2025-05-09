import type { TaskPriority, TaskType } from "./ITask";

export interface ITaskCard {
    priority: TaskPriority;
    taskType: TaskType;
    projectId: number;
    projectName: string;
    projectColor: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    handleClick?: () => void;
    id: number;
}