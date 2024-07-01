import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";


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
  </BrowserRouter>
  );
}

export default App;
