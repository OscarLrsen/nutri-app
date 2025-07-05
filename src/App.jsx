import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Komponenter/Home/Home";
import Menu from "./Komponenter/Menu/Menu";
import Cart from "./Komponenter/Cart/Cart"; 
import Login from "./Komponenter/Login/Login"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
