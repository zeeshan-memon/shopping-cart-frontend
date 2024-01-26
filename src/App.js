import logo from "./logo.svg";
import "./App.css";
import Product from "./pages/Products/Product";
import AppBar from "./components/AppBar";
import ProductDetails from "./pages/Products/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details/:id" element={<ProductDetails />}/>
        <Route path="/" element={<AppBar />}/>
      
        
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
