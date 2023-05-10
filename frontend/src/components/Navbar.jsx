import "./styl.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Navbar = () => {
    const looged = false;
    const user = localStorage.getItem("user_inf");
    const [isActive, setActive] = useState("false");
    const menu = () =>{
        setActive(!isActive); 
    }
    let one = "Login";
    let second = "Signup"
    let first_link = "/login"
    let second_link = "/signup"
    if(user) {
        one = "Create class"
        second = "Profile"
        first_link = "/createClass"
        second_link = "/profile"
    }

    console.log(user);
    
    return(
        <div id="navbar1" className={isActive ? "navbar" : "fillednavbar"}>
    <div className={isActive ? "navbar-top" : "fillednavbar-top"}>

        <Link to={'/'}>
            <div className="left"></div>
        </Link>
        <div className="right">
            <div className="navbartext">Language</div>
            <Link className="link" to={"/class"}>
                <div className="navbartext">Class</div>
            </Link>
            <Link className="link" to={first_link}>
                <div className="navbartext">{one}</div>
            </Link>
            <Link className="link" to={second_link}>
                <div className="navbartext">{second}</div>
            </Link>
        </div>
        <div onClick={menu} className="menu"></div>
    </div>
    <div className={isActive ? "none" : "menu-slide"}>
        <div className="outer-text">
            <div id="txt" className="menutext">Language</div>
        </div>
        <div className="outer-text">
            <div id="txt"className="menutext">Class</div>
        </div>
        <Link className="outer-text" to={"/login"}>
                <div id="txt" className="menutext">{one}</div>
        </Link>
            <Link className="outer-text" to={"/signup"}>
                <div id="txt" className="menutext">{second}</div>
            </Link>
    </div>
    </div>
    ) 
}