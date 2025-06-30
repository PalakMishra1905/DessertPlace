import React, { useContext, useState } from 'react'
import './Loginpopup.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'

const Loginpopup = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext); 
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
   name:"",
   email:"",
   password:""
  })

  const onChangeHandler = async(event)=>{
   const name = event.target.name;
   const value = event.target.value;
   setData((data)=>({...data, [name]:value}))
  }

  const onLogin = async(event)=>{
    event.preventDefault();
    let newUrl = url;
    if(currState == "Login"){
       newUrl += '/api/user/login'
    }else{
       newUrl += '/api/user/register'
    }

    const response = await axios.post(newUrl, data);
    if(response.data.success){
       setToken(response.data.token)
       localStorage.setItem("token", response.data.token)
       setShowLogin(false)
    }else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
       <form onSubmit={onLogin} action="" className="login-popup-container">
         <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src="cross_icon.png" alt="" />
         </div>
         <div className="login-popup-inputs">
            {currState === "Login"?<></>: <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="your name" required/>}
            <input name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="your email" required/>
            <input name="password" onChange={onChangeHandler} value={data.password} type="text" placeholder="Password" required/>
         </div>
         <button type="submit" className='btn'>{currState === "Sign Up"?"create account":"Login"}</button>

         <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
         </div>
         {currState === "Sign Up"? <p onClick={()=>setCurrState("Login")}>Already have an account? <span>Login here</span></p>
          :<p onClick={()=>setCurrState("Sign Up")}>Create a new account? <span>Click here</span></p>}
       </form>
    </div>
  )
}

export default Loginpopup