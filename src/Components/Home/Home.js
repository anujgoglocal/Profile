import React from 'react'
import "./component.css"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="logo" />
        <div className='connected-world' />
        <div className="img-right" />
        <div className="img-gradient" />
        <div className="content">
            <div className="header">
                 Make your ecommerce stores better by using GoGlocal.
            </div>
            <div className="menu">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            {/* <button className="btn-started">Get Started</button> */}
        </div>
    </>
    
  )
}
