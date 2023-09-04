import { useContext } from "react";
import { Link } from "react-router-dom";

import { SiteContext } from "../context/SiteContext";

export default function ProductCard({ product }) {
    const { user } = useContext(SiteContext)

    function handleClick(product) {
        let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
        const itemIndex = localFavs.findIndex(localItem => product.id === localItem.id);
        console.log(itemIndex)
        if (itemIndex >= 0) {
            localFavs = localFavs.filter(item => item.id !== product.id);
        } else {
            localFavs.push({ id: product.id, title: product.title })
        }
        localStorage.setItem("favs", JSON.stringify(localFavs))
    }

    return (
        <>
            <div className="col-sm mb-3">
                <div className="card">
                    <Link to={`/products/product/${product.id}`}>
                        <img src={product.image} className="card-img-top p-3" alt={product.title} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description.substring(0, 25)}..</p>
                        <p className="lead">{product.price}</p>
                        {user && <a href="#" className="btn btn-primary" onClick={() => handleClick(product)}>Fav</a>}
                    </div>
                </div>
            </div>
        </>
    )
}
