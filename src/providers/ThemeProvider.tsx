import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IThemeContext } from "../Interfaces/Contexts/IThemeContext";

const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    toggleTheme: () => {}
});

const ThemeProviderHL: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");  
    };
    useEffect(() => {
        document.getElementsByTagName('body')[0].className = `${theme}-theme`;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProviderHL };