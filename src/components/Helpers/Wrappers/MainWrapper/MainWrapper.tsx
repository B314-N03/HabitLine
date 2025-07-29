import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";

export const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { hideSidenavText } = useContext(ThemeContext);

    const mainClass = !hideSidenavText ? "sidenav-expanded" : "sidenav-collapsed"

    return <main className={mainClass}>{children}</main>;
};
