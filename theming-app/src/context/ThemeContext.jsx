import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [themeName, setThemeName] = useState("light");

    // When user click the theme button each time,the code block will render 
    function handleTheme() {
        setThemeName(prev => {
            const themeInfo = prev === "light" ? "dark" : "light";
            changeTheme(themeInfo)
            localStorage.setItem("theme", themeInfo);
            return themeInfo;
        })
    }

    function changeTheme(themeName) {
        document.documentElement.setAttribute('data-bs-theme', themeName);
    }

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    useEffect(() => {
        changeTheme(getPreferredTheme());
        setThemeName(getPreferredTheme());
    }, [])

    return (
        <ThemeContext.Provider value={{ themeName, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }