import axios from "./myapi";
import React , { useState} from "react" 
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
function Addprod() {
    const [name, pname] = useState('')
    const [price, pprice] = useState('')
    const [discount, pdiscount] = useState('')
    const navgite = useNavigate()
  const handelsubmit = async(e) => {  
    e.preventDefault()
    const id = uuidv4()
    const sendjx = { 
        id ,
        product_name : name , 
        Product_price : price , 
        product_discount:discount,

    }
try {
  const response = await axios.post('/posts', sendjx) 
  navgite("/")
} catch (error) {
  console.log(error)
}


  }
    return (
      
      <div className="cow">
         <Helmet>
          <title> Add Laptop</title>
        </Helmet>
        <h1> Add New Product </h1> 
        <form onSubmit={handelsubmit} >
        <div>
          <input type= "text"  onChange={ (e) => pname( e.target.value )  }   placeholder="product name" required/> 
          </div>    
           <div><input type= "number" onChange={ (e) => pprice( e.target.value )  }  placeholder="product price" required/></div> 
          <div>
          <input type= "number" onChange={ (e) => pdiscount( e.target.value )  } placeholder="product discount" required/>
          </div>       
        <div>
           <button className="primary-button"> Submit </button>
           
            </div>
            </form>

      </div>
    )
  }
  



  export default Addprod
  