import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound";
import { ProductsLayout, Products, Category, Product } from "./products";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRoute from "./PrivateRoute";

export default function SiteRoutes({ handleLogin, user }) {
    return (
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsLayout />}>
                <Route index={true} element={<Products user={user} />} />
                <Route path="category/:categoryName" element={<Category user={user} />} />
                <Route path="product/:productId" element={<Product user={user} />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/fav" element={<PrivateRoute user={user} ><Fav /></PrivateRoute>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
