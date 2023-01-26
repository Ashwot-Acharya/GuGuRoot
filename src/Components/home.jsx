import axios from "./myapi"
import { Link } from "react-router-dom"
import React, {useState , useEffect} from "react"
import "../css/home.css"
import laptop from "../assets/images/laptops.jpg"
import Navbar from "./navbar"

function Home() {
  const [data, setdata] = useState([]) 
  useEffect( () =>{
    const fetchpost = async()=> { 
      try {
        const response = await axios.get('/posts') 
        setdata( response.data ) 


      } catch (error) {
        
      }
    }
    fetchpost()
  },[] )
  return (
      <div>


        <div className="mgrid">
        {data.map((el) => {
        return ( 
          <div className="el-laptop">
            <Link to={`/product/${el.id}`}> 
            <img src={laptop}/>
            <p> { el.product_name }</p>
            </Link>

             </div>
         )
        })}
        </div>


      </div>
    )
  }
  
  export default Home
  