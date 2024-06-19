import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartNav from "./components/CartNav";
import ItemDetails from "./pages/ItemDetails.jsx";

import { footerAPI } from "./data/data";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer footerAPI={footerAPI} />
      <CartNav />
    </Router>
  );
}

export default App;
