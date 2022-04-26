

import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      nav,
      #home,
      #About,
      #products, 
      #contact 
      .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
    
  
      <Navbar />
      <Home />
      <About />
      <Product/>
      <Contact/>
      <Footer />
    </>
  );
}

