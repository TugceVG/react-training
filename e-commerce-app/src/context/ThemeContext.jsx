import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const storedTheme = localStorage.getItem('theme');
    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [themeName, setThemeName] = useState(storedTheme ?? browserTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', themeName);
        localStorage.setItem("theme", themeName);
    }, [themeName]);

    function handleTheme() {
        setThemeName(prev => {
            const themeInfo = prev === "light" ? "dark" : "light";
            return themeInfo;
        });
    }

    return (
        <ThemeContext.Provider value={{ themeName, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }