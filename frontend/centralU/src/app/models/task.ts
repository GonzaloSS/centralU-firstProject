export interface Task{
    id: number;
    name: string;
    project_id: string;
    user_id: string;
    stage_id: number;
    stage_name: string;
    date_deadline: Date;
    description: string;
}