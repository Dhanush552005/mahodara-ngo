import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/event" element={<Event />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
