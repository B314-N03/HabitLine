import type { TaskPriority, TaskType } from "./ITask";

export type TaskCardVariant = "xsmall" | "small" |  "medium" | "large";


export interface ITaskCard {
    priority: TaskPriority;
    taskType: TaskType;
    projectId: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    handleClick?: () => void;
    id: string;
    variant?: TaskCardVariant;
    showProject?: boolean
}