import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banners from "./components/Banners";
import Deals from "./components/Deals";
import Itemds from "./components/Itemds";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import Assurance from "./components/Assurance";
import Products from "./components/Products";
import Shop from "./components/Shop";

function HomePage() {
  return (
    <>
      <Banners />
      <Itemds />
      <Deals />
      <NewArrivals />
      <Products />
      <Assurance />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Components */}
        <Route path="/shop" element={<Shop />} /> {/* Shop Page */}
      </Routes>
    </Router>
  );
}

export default App;
