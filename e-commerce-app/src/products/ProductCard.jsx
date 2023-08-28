import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
                        <a href="#" className="btn btn-primary">Fav</a>
                    </div>
                </div>
            </div>
        </>
    )
}
