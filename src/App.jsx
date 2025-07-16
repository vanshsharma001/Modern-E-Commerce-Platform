import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./pages/TopRated";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
import TopRated from "./pages/TopRated";
import MensWear from "./pages/MensWear";
import WomensWear from "./pages/WomensWear";

const App = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <main className="bg-white text-gray-900 duration-200 scroll-smooth">
        <Navbar setSearch={setSearch} />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section id="products">
                  <Products search={search} />
                  <TopProducts />
                </section>
                <Banner />
                <Subscribe />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/womens-wear" element={<WomensWear />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
