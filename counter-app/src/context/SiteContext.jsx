import { createContext, useReducer } from "react";
import { countReducer, initialCountState } from "../reducer/count";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
    const [count, dispatch] = useReducer(countReducer, initialCountState);
    return (
        <SiteContext.Provider value={{ counter: { state: count, dispatch } }}>
            {children}
        </SiteContext.Provider>
    )
}

export { SiteContext, SiteContextProvider }