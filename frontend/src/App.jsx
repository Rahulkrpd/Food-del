import Navbar from "./componets/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./componets/pages/Home/Home"
import Cart from "./componets/pages/Cart/Cart"
import PlaceOrder from "./componets/pages/PlaceOrder/PlaceOrder"
import Footer from "./componets/Footer/Footer"
import { useState } from "react"
import LoginPopUp from "./componets/LoginPopUp/LoginPopUp"
import Verify from "./componets/pages/Verify/Verify"
import Myorder from "./componets/pages/Myorder/Myorder"

const App = () => {
    const [ showLogin,setShowLogin]= useState(false)

  return (
    <>
     {showLogin? <LoginPopUp setShowLogin={setShowLogin}/>: <> </> }
      <div className='app'>
        <Navbar  setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
