import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <h1> 404 - The page is not found... </h1>
            <Link to="/" className="btn btn-info">Click to go Home Page..</Link>
        </>
    )
}
