import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Komponenter/Home/Home";
import Menu from "./Komponenter/Menu/Menu";
import Cart from "./Komponenter/Cart/Cart"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
