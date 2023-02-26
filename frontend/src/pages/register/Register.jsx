

import React,{useState} from 'react'
import "./register.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import { useToast } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"


const Register = () => {
  const toast=useToast()
  const navigate=useNavigate()
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [confirm_email,setConfirmemail]=useState("")
   const [password,setPassword]=useState("")
   const [confirm_password,setConfirmpassword]=useState("")
   const [mobile,setMobile]=useState("")
    
   const [emailempty,setEmailempty]=useState(false)
    const [passempty,setPassempty]=useState(false)
    const [confirm_emailempty,setConfirm_emailempty]=useState(false)
  const [confirm_passempty,setConfirm_passempty]=useState(false)
   const handleSubmit=async()=>{
     const payload={
       name,email,confirm_email,password,confirm_password,mobile
     }
   
     if(email===""){
      setEmailempty(true)
     }else{
      setEmailempty(false)
     }
     if(password===""){
       setPassempty(true)
     }else{
      setPassempty(false)
     }

     if(confirm_email===""){
      setConfirm_emailempty(true)
     }else{
      setConfirm_emailempty(false)
     }

      if(confirm_password===""){
        setConfirm_passempty(true)
      }else{
        setConfirm_passempty(false)
      }


    await fetch("https://prickly-beret-goat.cyclic.app/users/register",{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
          "Content-type":"application/json"
         }
     })
     .then(res=>res.json())
     .then(res=>{
            if(res.msg==="User already registered"){
              toast({
                title: 'User already registered',
                description: "Existing User",
                status: 'warning',
                duration: 3000,
                isClosable: true,
              })
            }else if(res.msg==="New User has been registered"){
              toast({
                title: 'Successfully registered',
                description: "Success",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              navigate("/")
            }else{
              toast({
                title: 'Something went wrong',
                description: "Something went wrong",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            }

     })
    
     
    
     
     .catch(err=>console.log(err.message))
   }

  return (
    <div className='register-container'>
       <div className='navbar'>
         Navbar
       </div>
       <div className='register-content'>
           <div className="register-form">
            <div className='register-title-container'>
            <h1 className='register-title'>
               About You
            </h1>
            </div>

            <div className='input-container'>
               <div className='upper-part'>
                <div className='upper-title-div'>
                  <h1 className='upper-title'>
                     Sign Up With
                  </h1>
                </div>
                <div className='accounts-container'>
                   <div className='left'>
                        <FacebookIcon />
                        <h1>Facebook</h1>
                   </div>
                   <div className='right'>
                    <GoogleIcon />
                    <h1>Google</h1>
                   </div>
                </div>
               </div>
              
               <div className='lower-part'>
                     <div className='lower-title-div'>
                      <h1 className='lower-title'>
                         Or create an email account
                      </h1>
                     </div>
                     <div className='input-tags-div'>
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                        *Full Name
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-1 */}
                       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                     </div>
                     {/* 2nd input */}
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                      *Email address
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-2 */}
                       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                     </div>
                     {
                      emailempty===true?<div className='email-error'><h1>Email feild is required </h1></div>:<div className='email-no-error'></div>
                     }
                     {/* 3rd input */}
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                      *Confirm Email address
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-3 */}
                       <input type="email" value={confirm_email} onChange={(e)=>setConfirmemail(e.target.value)} />
                     </div>
                     {
                      confirm_emailempty===true?<div className='confirm-email-error'><h1>Confirm Email feild is required </h1></div>:<div className='pass-no-error'></div>
                     }
                     {/* 4th input */}
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                      *Password
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-4 */}
                       <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                     </div>
                     {
                      passempty===true?<div className='pass-error'><h1>Password feild is required </h1></div>:<div className='pass-no-error'></div>
                     }
                     {/* 5 input */}
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                        *Confirm Password
                      </h1>
                     </div>
                   
                     {/* input-6 */}
                     <div className='input-div'>
                      {/* input-6 */}
                       <input type="password" value={confirm_password} onChange={(e)=>setConfirmpassword(e.target.value)} />
                     </div>
                     {
                      confirm_passempty===true?<div className='confirm-pass-error'><h1>Confirm password feild is required </h1></div>:<div className='pass-no-error'></div>
                     }
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                        *Cell Phone Number (Mandatory)
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-7 */}
                       <input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                     </div>
                     {/* refreral */}
                     <div className='refreal-div'>
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                      *Referral Code (Optional)
                      </h1>
                     </div>
                     <div className='input-div'>
                      {/* input-2 */}
                       <input type="text" />
                     </div>
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                      *Your referrals discount is automatically applied at cart
                      </h1>
                     </div>
                     </div>
                     </div>

               </div>


               <div className='bottom-part'>
               <div className='bottom-title-div'>
                      <h1 className='bottom-title'>
                         Loyalty Reward program
                      </h1>
                     </div>
                     <div className='bottom-title-another'>
                      <h1 className='bottom-title'>
                        <input type={'checkbox'}/>
                       Include me in the Silktouch Rewards program <u>Read our terms of use</u>
                      </h1>
                     </div>

                 <button className='login-button' onClick={handleSubmit}>CONTINUE</button>    

                 <div className='last-part'>
                  <h1>By proceeding, you are confirming that you agree to our <u>Terms and Conditions</u> and <u>Privacy Policy</u></h1>
                 </div>
               </div>
            </div>
            
           </div>
       </div>
    </div>
  )
}

export default Register