import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SiteContext = createContext();

function SiteContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')) ?? null);
    }, [])

    const handleLogin = () => {
        const user = { id: 1, name: "tugce" };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/");
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <SiteContext.Provider value={{ user, handleLogout, handleLogin }}>
            {children}
        </SiteContext.Provider>
    )
}

export { SiteContextProvider, SiteContext }