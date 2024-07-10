import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Header />
   
    <div className="flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
      <Sidebar />
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
