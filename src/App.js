import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Navbar cart={cart} />
      <Product cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
