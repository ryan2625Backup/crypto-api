import React from 'react'
import "../styles/navbar.scss"
import  image  from "./crypto-logo-official.png"

function Navbar() {
  return (
    <div className="navbar">
        <img src={image} alt="" />
    </div>
  )
}

export default Navbar