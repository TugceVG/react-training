import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Fav() {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem('favs')) ?? []);
    }, [])

    return (
        <>
            <h1>Favorities</h1>
            <div className="list-group">
                {favs.map(fav =>
                    <Link
                        key={fav.id}
                        to={`/products/product/${fav.id}`}
                        className="list-group-item list-group-item-action">
                        {fav.title.toUpperCase()}
                    </Link>
                )}
            </div>
        </>
    )
}
