import "./Navbar.css"
import { useState } from "react"
import {FaBars, FaTimes} from "react-icons/fa"
// import React from "react"
import { Link } from "react-router-dom"
export default function About() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor ] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 1){
            setColor(true);
        }else{
            setColor(false)
        }

    };

    window.addEventListener("scroll", changeColor);
    return (
        <header className={color ? " header header-bg": "header"}>
            <Link to='/'>
            <h1 className="logo">W.O <span>Imafidon</span></h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/experiences">Experiences</Link></li>
                <li> <Link to ="/projects">Projects</Link></li>
                <li> <Link to ="/contact" className="btn-light">Contact</Link></li>

            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20}/>) :
                (<FaBars size={20}/>)
                }

            </div>
        </header>

    )
}

