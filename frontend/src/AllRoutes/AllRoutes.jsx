import React from 'react'
import {Route,Routes} from "react-router-dom"
import UserList from '../adminpages/userList/UserList'
import User from '../adminpages/user/User'
import NewUser from '../adminpages/newUser/NewUser'
import NewProduct from '../adminpages/newProduct/NewProduct'
import Product from '../adminpages/product/Product'
import ProductList from '../adminpages/productList/ProductList'
import Admin from '../pages/admin/Admin'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Bestsellers from '../categoryFolder/allRoute/Iron/Bestseller'

import CartPage from "../pages/CartPage";
import Makeup from '../categoryFolder/allRoute/makeup/makeup'
import Bath_Body from '../categoryFolder/allRoute/juicers/bath&body'
import BrowserBy from '../categoryFolder/allRoute/BrowserBy/BrowserBy'
import Page from '../pages/Page'

const AllRoutes = () => {
  return (
     <>
   <Routes>

   <Route path="/" element={<Home/>}></Route>
   <Route path="/checkout" element={<Checkout/>}></Route>
   <Route path="/bestseller" element={<Bestsellers/>}></Route>
   <Route path="/browserby" element={<BrowserBy/>}></Route>
   <Route path="/makeup" element={<Makeup/>}></Route>
   <Route path="/bath&beauty" element={<Bath_Body/>}></Route>
   <Route path="/page" element={<Page/>}></Route>
   <Route path="/cartpage" element={<CartPage/>}></Route>
   <Route path="/admin" element={<Admin />}></Route>
   <Route path="/users" element={<UserList />}></Route>
   <Route path="/user/:userId" element={<User />}></Route>
   <Route path="/newUser" element={<NewUser />}></Route>
   <Route path="/products" element={<ProductList />}></Route>
   <Route path="/product/:productId" element={<Product />}></Route>
   <Route path="/newproduct" element={<NewProduct />}></Route> 
   <Route path="/register" element={<Register />}></Route>
   <Route path="/login" element={<Login />}></Route>

</Routes> 
     </>
     
  )
}

export default AllRoutes