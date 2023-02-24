
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";


import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
//import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <AllRoutes />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
     </Routes>
    </div>


  

  )}


export default App;
