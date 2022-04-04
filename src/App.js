import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
