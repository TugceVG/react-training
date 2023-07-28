import React from 'react';
import ProductCard from './ProductCard';

export default function ImgContainer({ products }) {
    return (
        <div className="grid">
            {
                products.filter(product => product.isAvailable).map(product =>
                    <ProductCard product={product} key={product.id} />
                )
            }
        </div>
    )
}


{/* I have an idea
    {
        [...Array(1084)].map((item, index) =>

            <article key={index}>
                <header>{`Image ${index + 1}`}</header>
                <img src={`https://picsum.photos/id/${index + 1}/200/150`} alt="" />
                <footer>Choose</footer>
            </article>
        )
    }
*/}