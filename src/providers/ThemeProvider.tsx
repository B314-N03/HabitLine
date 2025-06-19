import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IThemeContext } from "../Interfaces/Contexts/IThemeContext";
import { useLocation } from "react-router-dom";

const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    toggleTheme: () => {},
    setTheme: () => {},
});

const ThemeProviderHL: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : "light";
    });
    const location = useLocation();
    useEffect(() => {
        // Reset theme to light if on splash screen
        if (location.pathname === "/") {
            setTheme("dark");
        }
    }, [location.pathname]);
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");  
    };
    useEffect(() => {
        document.getElementsByTagName('body')[0].className = `${theme}-theme`;
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProviderHL };