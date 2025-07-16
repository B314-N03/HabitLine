export interface IComment {
    id: string;
    task_id: string;
    user_id: string;
    content: string;
    created_at: Date;
    updated_at: Date;
}