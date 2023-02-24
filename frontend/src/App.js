

import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";

import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>
     </Routes>
     {/* <Footer/> */}
    </div>



  


  )}


export default App;
