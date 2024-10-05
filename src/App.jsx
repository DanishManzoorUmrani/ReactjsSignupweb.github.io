import React from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Profile from './components/Profile'
import Navber from './components/Navber'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Product from './components/Product'



export default function App() {
  const navigate = useNavigate();
  return (
    < >
      <div>
        < Navber />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Signin' element={<Signin />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='Product' element={<Product />} />
        </Routes>


        <Footer />
      </div>
    </>
  )
}
