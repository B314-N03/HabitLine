export interface IUserContext {
    id: number;
    setId: React.Dispatch<React.SetStateAction<number>>;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    avatar: string;
    setAvatar: React.Dispatch<React.SetStateAction<string>>;
    lastLoginDate: Date;
}