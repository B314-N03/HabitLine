export interface IProject {
    title: string;
    description: string;
    openTasks: number;
    doneTasks: number;
    createdAt: Date;
    lastUpdatedAt: Date;
    id: string;
    projectColor: string;
}

export interface IProjectFrontend {
    title: string;
    description: string;
    projectColor: string;
    id: string;
}