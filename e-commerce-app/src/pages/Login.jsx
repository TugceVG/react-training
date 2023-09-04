import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"

export default function Login() {
    const { handleLogin } = useContext(SiteContext)
    return (
        <>
            <h1>Login</h1>
            <button
                onClick={handleLogin}
                className="btn btn-primary">
                Login
            </button>
        </>
    )
}
