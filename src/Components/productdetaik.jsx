import { Link, useParams } from "react-router-dom"
import axios from "./myapi"
import React, {useState , useEffect} from "react"
import {detailquery} from './data'
import { Helmet } from "react-helmet"
import laptop from '../assets/images/laptops.jpg'
import { useNavigate } from "react-router-dom";
import Home from "./home"

function ProductDetail() {
  const {id} = useParams()
  const navgite = useNavigate()
    console.log(id)
    const [data , setdata] = useState([])
    useEffect( () =>{
      const fetchpost = async()=> { 
        const query = detailquery(id)
        if (query){
          try {
            const response = await axios.get(`/posts/${id}`)
            console.log(response.data) 
            setdata( response.data ) 
    
    
          } catch (error) {
            console.log(error)
          }
        }
      }
      fetchpost()
    } , [id] )
    const handeldelete = async(id) => {
      try {
        await axios.delete(`/posts/${id}`)
        navgite('/')
        alert("the items has been deleted")
        
      } catch (error) {
        console.log(error)        
      }
    }
    const amazonlink = "https://www.amazon.com/s?k=" + data.product_name

    return (
      <div className="cow">
         <Helmet>
          <title>{
data.product_name }</title>
        </Helmet>
        <h1> <a className="no-und" href="/">GuGu Root</a></h1>
  <div className="grid2">
  <div className="prod-img">
         <img src={laptop}/>
         </div>
   <div className="prod-det grd-lft">
         <h1 className="b-gry">{
          data.product_name 
          }  </h1>
          <h4> Price: <i>{data.Product_price}</i> Dollars ($) </h4>
          <h4> discount at <i>{data.product_discount}</i> %  </h4>
        <div><a target="_blank" className="primary-button no-und" href={amazonlink}> Find On Amazon</a>  </div>  
        <div> <button onClick={()=>handeldelete(data.id)} className="red-button"> Delete </button></div> 
   </div>
  </div>
  <h2 className="no-und"> Similar recommendations</h2>
         <Home/>
    </div>
    )
  }
  
  export default ProductDetail
  