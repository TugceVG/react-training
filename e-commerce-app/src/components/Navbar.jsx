import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
    const { user, handleLogout } = useContext(SiteContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        R-Store
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            {
                                user
                                    ?
                                    <>
                                        <NavLink className="nav-link" to="/fav">Favorities</NavLink>
                                        <button className="nav-link" onClick={handleLogout}>Logout ({user.name})</button>
                                    </>
                                    : <NavLink className="nav-link" to="/login">Login</NavLink>
                            }
                        </div>
                    </div>
                    <ThemeIcon className="ms-auto" />
                </div>
            </nav>
        </>
    )
}
