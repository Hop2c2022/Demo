import "./styl.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Navbar = () => {
    const [isActive, setActive] = useState("false");
    const menu = () =>{
        setActive(!isActive); 
    }
    return(
        <div className={isActive ? "navbar" : "fillednavbar"}>
    <div className={isActive ? "navbar-top" : "fillednavbar-top"}>

        <Link to={'/'}>
            <div className="left"></div>
        </Link>
        <div className="right">
             <Link className="link" to={"/create"}>
                <div className="navbartext">Create</div>
            </Link>
            <Link className="link" to={"/class"}>
                <div className="navbartext">Class</div>
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
    <div className={isActive ? "none" : "menu-slide"}>
        <Link className="outer-text" to={"/createclass"}>
                <div className="menutext">Create</div>
            </Link>
        <Link className="outer-text" to={"/class"}>
                <div className="menutext">Class</div>
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