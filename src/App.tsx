import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Tv from "./pages/Tv";
import Contents from "./pages/Contents";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="live" element={<Live />} />
        <Route path="tv" element={<Tv />} />
        <Route path="movie" element={<Tv />} />
        <Route path="contents/:id" element={<Contents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;