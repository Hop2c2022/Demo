import "./styl.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Navbar = () => {
    const [isActive, setActive] = useState("false");
    const menu = () =>{
        setActive(!isActive); 
    }
    return(
        <div className="navbar">
    <div className="navbar-top">

        <Link to={'/'}>
            <div className="left"></div>
        </Link>
        <div className="right">
            <div className="navbartext">Language</div>
            <Link className="link" to={"/class"}>
                <div className="navbartext">Classes</div>
            </Link>
            <Link className="link" to={"/login"}>
                <div className="navbartext">LogIn</div>
            </Link>
            <Link className="link" to={"/signup"}>
                <div className="navbartext">SignUp</div>
            </Link>
        </div>
        <div onClick={menu} className="menu"></div>
    </div>
    <div className={isActive ? "menu-slide" : "none"}>
        <div className="outer-text">
            <div className="menutext">Language</div>
        </div>
        <Link className="outer-text" to={"/class"}>
                <div className="menutext">Classes</div>
        </Link>
        <Link className="outer-text" to={"/login"}>
                <div className="menutext">LogIn</div>
        </Link>
            <Link className="outer-text" to={"/signup"}>
                <div className="menutext">SignUp</div>
            </Link>
    </div>
    </div>
    )
}