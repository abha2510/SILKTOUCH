

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

const AllRoutes = () => {
  return (
     <>
      <Routes>
   
    
        

   
   <Route path="/admin" element={<Admin />}></Route>
   <Route path="/users" element={<UserList />}></Route>
   <Route path="/user/:userId" element={<User />}></Route>
   <Route  path="/newUser" element={<NewUser />}></Route>
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