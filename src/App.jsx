import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/home'
import Addprod from './Components/addprod'
import ProductDetail from './Components/productdetaik'

import { Route , Routes } from 'react-router-dom'
import FrontPage from './Components/frontpage'
import AddAdmin from './Components/addadmin'
import Login from './Components/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route path='/' element= {<FrontPage/>} />
       <Route path='/add' element= {<Addprod/>} />
       <Route path='/product/:id' element= {<ProductDetail/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/addadmin' element={<AddAdmin/>} />

     </Routes>
      
    </div>
  )
}

export default App
