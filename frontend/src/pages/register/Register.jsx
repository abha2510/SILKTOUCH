

import React,{useState} from 'react'
import "./register.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


const Register = () => {

   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [confirm_email,setConfirmemail]=useState("")
   const [password,setPassword]=useState("")
   const [confirm_password,setConfirmpassword]=useState("")
   const [mobile,setMobile]=useState("")
    
   const [emailempty,setEmailempty]=useState(false)


   const handleSubmit=()=>{
     const payload={
       name,email,confirm_email,password,confirm_password,mobile
     }
   
     if(email===""){
      setEmailempty(true)
     }else{
      setEmailempty(false)
     }

     fetch("https://prickly-beret-goat.cyclic.app/users/register",{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
          "Content-type":"application/json"
         }
     })
     .then(res=>console.log(res))
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
                      emailempty===true?<div className='email-error'><h1>Email feild is required Feild</h1></div>:<div className='email-no-error'></div>
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
                     <div className='input-title-div'>
                      <h1 className='input-title'>
                        *Cell Phone Number (Optional)
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