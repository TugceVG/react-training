import { useContext } from "react";
import { DECREMENT, INCREMENT, RESET } from "./reducer/actionType";
import { SiteContext } from "./context/SiteContext";

export default function ContextAbout() {
    const { counter: { state, dispatch } } = useContext(SiteContext)
    return (
        <div>
            <h2>ContextAbout</h2>
            <h2>{state}</h2>
            <button onClick={() => dispatch(INCREMENT)}>Increment</button>
            <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatch(RESET)}>Reset</button>
        </div>
    )
}
