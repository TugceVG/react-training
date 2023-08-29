import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound";
import { ProductsLayout, Products, Category, Product } from "./products";
import Login from "./pages/Login";

export default function SiteRoutes({ handleLogin }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsLayout />}>
                <Route index={true} element={<Products />} />
                <Route path="category/:categoryName" element={<Category />} />
                <Route path="product/:productId" element={<Product />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
