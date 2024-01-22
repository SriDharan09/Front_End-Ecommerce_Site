import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";
import ViewProduct from "./pages/viewProduct";
import ShopContext from "./components/shopContext";
import { useLocation } from "react-router-dom";
import React from "react";
import Signup from "./pages/signUp";
import Forgotpasword from "./pages/forgotPassword";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpasword" element={<Forgotpasword />} />
              <Route path="*" element={<Home />} />
              <Route path="/viewProduct" element={<ViewProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App;
