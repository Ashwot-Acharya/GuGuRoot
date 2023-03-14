import axios from "./myapi";
import React , { useState} from "react" 
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
function AddAdmin() {
    const [name, prname] = useState('')
    const [email, premail] = useState('')
    const [password, prpassword] = useState('')
    const navgite = useNavigate()
  const handelsubmit = async(e) => {  
    e.preventDefault()
    const id = uuidv4()
    const sendjx = { 
        id ,
        Name : name , 
        email : email , 
        password: password,

    }
try {
  const response = await axios.post('/admin', sendjx) 
  navgite("/")
} catch (error) {
  console.log(error)
}


  }
    return (
      
      <div className="cow">
         <Helmet>
          <title> Add Admin</title>
        </Helmet>
        <h1> Add Admin </h1> 
        <form onSubmit={handelsubmit} >
        <div>
          <input type= "text"  onChange={ (e) => prname( e.target.value )  }   placeholder="Name" required/> 
          </div>    
           <div><input type= "email" onChange={ (e) => premail( e.target.value )  }  placeholder="Email" required/></div> 
          <div>
          <input type= "password" onChange={ (e) => password( e.target.value )  } placeholder="Password" required/>
          </div>       
        <div>
           <button className="primary-button"> Submit </button>
           
            </div>
            </form>

      </div>
    )
  }
  



  export default AddAdmin
  