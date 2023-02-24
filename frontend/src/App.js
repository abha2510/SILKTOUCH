

import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";

import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import Checkout from "./pages/Checkout";

import Page from "./pages/Page"
import CartPage from "./pages/CartPage"

import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
     <Routes>

      <Route path="/checkout" element={<Checkout/>}></Route>
       <Route path="/page" element={<Page/>}></Route>
        <Route path="/cartpage" element={<CartPage/>}></Route>

     <Route path="/" element={<Home/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>

     </Routes>
     {/* <Footer/> */}
    </div>



  


  )}


export default App;
