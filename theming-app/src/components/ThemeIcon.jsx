import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { lightThemeIcon, darkThemeIcon } from "./icons";

export default function ThemeIcon() {
    const { themeName, handleTheme } = useContext(ThemeContext);

    return (
        <>
            {themeName === "light"
                ? <button className="btn" onClick={handleTheme}>{lightThemeIcon} Light</button>
                : <button className="btn" onClick={handleTheme}>{darkThemeIcon} Dark</button>
            }
        </>
    )
}
