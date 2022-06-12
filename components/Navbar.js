

import {useState} from "react" ;
import 'bootstrap/dist/css/bootstrap.css'
//import Link from "next/link" ;

/*function navBar()
{
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
      setActive(!isActive);
  };
    return(
        <div className = {navStyles.container}>
        <ul>
           <li className = {navStyles.item}><Link href = "/">Home</Link></li>
           <li className = {navStyles.item}><Link href = "/about">ABOUT</Link></li>
           <li className =  {navStyles.item}><Link href = "/hoteldetails">Hotel Details</Link></li>
           <li className =  {navStyles.item}><Link href = "/contactus">Contact Us</Link></li>
        </ul>
        <button className = {navStyles.toggle} onClick = {handleToggle} />
        </div>
        
    )
}*/
import React from 'react'
import { Nav, Button  } from 'react-bootstrap';
import Link from 'next/link'
import navStyles from "../styles/Nav.module.css"

export default function navBar() {
    
  return (
  
    <Nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    {/* <Link href="/">
      <a className="navbar-brand">GyanBlog</a>
    </Link> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/hoteldetails">
            <a className="nav-link">Hotel Details</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contactus">
            <a className="nav-link">Contact Us</a>
          </Link>
        </li>
      </ul>
      
    </div>
  </div>
</Nav>
  )
}
