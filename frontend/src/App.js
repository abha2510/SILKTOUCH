

import {Routes,Route} from "react-router-dom"
import './App.css';
//import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>
     </Routes>
    </div>

// import Sidebar from "./admincomponents/sidebar/Sidebar";
// import Topbar from "./admincomponents/topbar/Topbar";

// import Home from "./adminpages/home/Home";
// import   {Routes ,Route}  from "react-router-dom";
// import UserList from "./adminpages/userList/UserList";
// import User from "./adminpages/user/User";
// import NewUser from "./adminpages/newUser/NewUser";
// import ProductList from "./adminpages/productList/ProductList";
// import Product from "./adminpages/product/Product";
// import NewProduct from "./adminpages/newProduct/NewProduct";


  

  )}

export default App;
