export interface IProjectCard {
    title: string;
    description: string;
    openTasks: number;
    doneTasks: number;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    projectColor: string;
    handleClick: () => void;
}