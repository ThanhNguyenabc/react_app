import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
