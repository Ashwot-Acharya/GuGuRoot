import axios from "./myapi"
import React, { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Home from "./home"
import { useState } from "react"
import { detailquery } from "./data"


function Login() {
    const [email, premail] = useState('')
    const [password, prpassword] = useState('')
    const [data, setdata] = useState('')
  const handelsubmit = async(e) =>{
    e.preventDefault()
    const response = await axios.get('/admin') 
    
  }
    return (
      <div className="cow">
        <h1> Admin Panal Login</h1>
        <div className="login-form form">
            <form>
               <div><input className="input" placeholder="Username" type="text" required/>
 </div>               <div><input className="input" type="password" placeholder="Password"  required/></div> 
               <div className="nav-bar">
              <div> <button className="primary-button "> login </button></div> <div> <Link className="mt-25" to={'/'}> Forgot Password </Link> <div><a className="p-3" href="/addprod"> New User </a></div> </div>
               </div>
            </form>
        </div>
    </div>
    )
  }
  
  export default Login
  