import { useEffect, useState } from "react";
import { ProductCard } from ".";

export default function Products() {
    const [last10Products, setLast10Products] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => setLast10Products(json))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Products:</h2>
            <div className="row row-cols-sm-3 row-cols-md-4">
                {last10Products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}
