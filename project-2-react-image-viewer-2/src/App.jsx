import { useState } from 'react';

import ImgContainer from './components/ImgContainer.jsx';
import ImgNotSelected from './components/imgNotSelected.jsx';
import { products as data } from "./data/products.js"

function App() {
  const [activeProduct, setActiveProduct] = useState(data.find(item => item.isActive));
  const [products, setProducts] = useState(data);

  return (
    <>
      <main className="container">
        {
          activeProduct ? <img src={activeProduct.imgName} style={{ width: '100%' }} /> : <ImgNotSelected />
        }
        <ImgContainer products={products} />
      </main>
    </>
  )
}

export default App