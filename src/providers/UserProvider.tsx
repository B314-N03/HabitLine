import { createContext,  type ReactNode } from "react";
import type { IUserContext } from "../Interfaces/Contexts/IUserContext";
import { useMe } from "../hooks/useAuth";

const UserContext = createContext<IUserContext>({
    id: "",
    username: "",
    email: "",
    password: "",
    loggedIn: false,
    avatar: "",
    lastLoginDate: new Date(),
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const {data: user } = useMe()

    if (user) {
        return (
            <UserContext.Provider value={{ 
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
                loggedIn: true,
                avatar: user.avatar,
                lastLoginDate: new Date(user.lastLoginDate),
            }}>
                {children}
            </UserContext.Provider>
        );
    }
    
    // If no user data is available, provide default values
    return (
        <UserContext.Provider value={{ 
            id: "",
            username: "",
            email: "",
            password: "",
            loggedIn: false,
            avatar: "",
            lastLoginDate: new Date(),
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };