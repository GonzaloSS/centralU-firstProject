export interface User{
    is_admin: boolean;
    db: string;
    name: string;
    login: string;
    password: string;
    function: string;
    session_id: string;
    user_id: string;
}