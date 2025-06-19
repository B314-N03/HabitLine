export interface IUserContext {
    id: string;
    username: string;
    email: string;
    password: string;
    loggedIn: boolean;
    avatar: string;
    lastLoginDate: Date;
}