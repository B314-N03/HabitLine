export interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
    setTheme: (theme: "light" | "dark") => void;
    hideSidenavText: boolean;
    toggleSidenavText: () => void
}