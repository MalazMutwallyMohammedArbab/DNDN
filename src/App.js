import {Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './Components/Navbar'
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vision from "./Pages/Vision";
import Letter from "./Pages/Letter";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Features from "./Pages/Features";
import Objects from './Pages/Objects'
import Footer from "./Components/Footer";

import Forms from "./Components/Forms";
import Thanks from "./Components/Thanks";

function App() {
  return (
    <div className="font-regu">
      <Navbar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/vision" element={<Vision />} />
        <Route exact path="letter" element={<Letter />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/objects" element={<Objects />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/forms" element={<Forms />} />
        <Route exact path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
