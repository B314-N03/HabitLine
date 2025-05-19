import { createContext, useState, type ReactNode } from "react";
import type { IUserContext } from "../Interfaces/Contexts/IUserContext";

const UserContext = createContext<IUserContext>({
    id: 0,
    setId: () => {},
    username: "",
    setUsername: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    loggedIn: false,
    setLoggedIn: () => {},
    avatar: "",
    setAvatar: () => {},
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [id, setId] = useState<number>(0);
    const [username, setUsername] = useState<string>("Bela");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<string>("");


    return (
        <UserContext.Provider value={{ 
            id, setId,
            username, setUsername,
            email, setEmail,
            password, setPassword,
            loggedIn, setLoggedIn,
            avatar, setAvatar,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };