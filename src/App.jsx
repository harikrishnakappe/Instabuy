import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import logo from './assets/7.png'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {Routes,Route, useNavigate} from 'react-router-dom'
import ProductGallery from './components/productGallery'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { Button,Badge } from 'react-bootstrap'
import Checkout from './components/Checkout'

import './App.css'

function App() {
  const navigate=useNavigate();
  const[user,setuser]=useState('')
  const [cartItems,setcartItems]=useState({})
  useEffect(()=>{
    const useremail=localStorage.getItem('useremail')
    if(useremail){
      setuser(useremail)

    }
  },[])
  const handleAddtoCart=(item)=>{
    setcartItems({...cartItems ,...item})
  }
  return (
    <div>
    <Navbar className="instabuy-navbar">
      <Navbar.Brand href="/">
      <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{''}InstaBuy</Navbar.Brand>
    
      <Navbar.Collapse className="justify-content-end">
        {user && <Button onClick={()=>navigate('/cart')}> cart  &nbsp;{Object.keys(cartItems).length>0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)} </Button>}
       <Button className='ms-2'onClick={()=>navigate('/login')}>{user?'Logout':'Login'}</Button>
      </Navbar.Collapse>
  </Navbar>
  <Routes>
    <Route path='/' element={<Home user={user}/>}/>
    <Route path='/login' element={<Login setuser={setuser}/>}/>
    <Route path='/Register' element={<Register setuser={setuser}/>}/>
    <Route path='/Products' element={<ProductGallery/>}/> 
    <Route path='/products/:id' element={<ProductDetails handleAddtoCart={handleAddtoCart} cartItems={cartItems}/>}/>
    <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
  
  
  
  </div>

    
  )
}

export default App
