import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IThemeContext } from "../Interfaces/Contexts/IThemeContext";
import { useLocation } from "react-router-dom";

const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    toggleTheme: () => { },
    setTheme: () => { },
    hideSidenavText: false,
    toggleSidenavText: () => { }
});

const ThemeProviderHL: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : "light";
    });
    const [hideSidenavText, setHideSidenavText] = useState(false);
    const location = useLocation();
    useEffect(() => {
        // Reset theme to dark if on splash screen
        if (location.pathname === "/") {
            setTheme("dark");
        }
    }, [location.pathname]);
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleSidenavText = () => {
        setHideSidenavText(!hideSidenavText);
    }
    useEffect(() => {
        document.getElementsByTagName('html')[0].style.borderColor = theme === "light" ? "#fff" : "#121212";
        document.getElementsByTagName('body')[0].className = `${theme}-theme`;
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    useEffect(() => {
        const mainTag = document.getElementsByTagName('main')[0];

        if (mainTag) {
            mainTag.classList.remove("sidenav-expanded", "sidenav-collapsed");
            mainTag.classList.add(!hideSidenavText ? "sidenav-expanded" : "sidenav-collapsed");
        }
    }, [hideSidenavText]);


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, hideSidenavText, toggleSidenavText }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProviderHL };