import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/home'
import Addprod from './Components/addprod'
import ProductDetail from './Components/productdetaik'

import { Route , Routes } from 'react-router-dom'
import FrontPage from './Components/frontpage'
import Admin from './Components/admin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route path='/' element= {<FrontPage/>} />
       <Route path='/add' element= {<Addprod/>} />
       <Route path='/product/:id' element= {<ProductDetail/>} />
      <Route path='/admin' element={<Admin/>}/>


     </Routes>
      
    </div>
  )
}

export default App
