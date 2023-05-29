import { Theme } from "@emotion/react";
import { createContext, useContext, useState } from "react";
import { darkTheme, theme } from "../utils/theme";


interface CurrentTheme {
    name: "light" | "dark";
    theme: Theme;
}

interface ThemeContextProps {
    theme: CurrentTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: {name: "light", theme},
    toggleTheme: () => {},
})


export const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>({
        name: "light",
        theme,
    });
    
    const toggleTheme = () => {
        setCurrentTheme(prev => prev.name === "light" ? {name: "dark", theme: darkTheme} : {name: "light", theme})
    }

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}