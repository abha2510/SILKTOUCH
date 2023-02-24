

import React,{useState} from 'react'
import "./login.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=()=>{
     const payload={email,password}
     fetch("https://prickly-beret-goat.cyclic.app/users/login",{
         method:"POST",
         body:JSON.stringify(payload),
         
         headers:{
          "Content-type":"application/json"
         }
     }).then(res=>res.json())
     .then(res=>{console.log(res)
      localStorage.setItem("token",res.token)
      if(email==="admin@gmail.com" && password==="admin"){
          navigate("/admin")
      }else{
          navigate("/")
      }
  
      // navigate("/admin")
    })
     .catch(err=>console.log(err.message))
  }

  const handleRegisterRoute=()=>{
    navigate("/register")
  }

  return (
    
    <div className='login-container'>
       <div className='navbar'>
         Navbar
       </div>
       <div className='login-content'>
        <div className='left-side'>
          <div className='left-title'>
            <h1>Existing Customers</h1>
          </div>
          <div className='lower-part'>
                     <div className='input-tags-div'>
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                        *Email address
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-1 */}
                       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                     </div>
                     {/* 2nd input */}
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                      *Password
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-2 */}
                       <input type="email" value={password} onChange={(e)=>setPassword(e.target.value)} />
                     </div>
                     <div className='forget'>
                      <h1><u>FORGOT YOUR PASSWORD?</u></h1>
                     </div>
                     <button className='login-button' onClick={handleSubmit}>LOGIN TO YOUR ACCOUNT</button> 
                     <div className='upper-title-div-login'>
                  <h1 className='upper-title-login'>
                     or, Continue with
                  </h1>
                </div>
                <div className='accounts-container-login'>
                   <div className='left-login'>
                        <FacebookIcon />
                        <h1>Facebook</h1>
                   </div>
                   <div className='right-login'>
                    <GoogleIcon />
                    <h1>Google</h1>
                   </div>
                </div>
                </div>

               </div>
        </div>
        <div className='right-side'>
        <div className='left-title'>
            <h1>New Customers</h1>
          </div>
          <button className='login-button' onClick={handleRegisterRoute}>Register</button>
        </div>
       </div>
    </div>
  )
}

export default Login