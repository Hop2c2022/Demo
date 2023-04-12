import "./styl.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
    return(
    <div className="navbar">
        <div className="left"></div>
        <div className="right">
            <div className="navbartext">Language</div>
            <div className="navbartext">Class</div>
            <Link to={"profile"}className="navbartext" >Profile</Link>
            <Link to={"login"}className="navbartext" >Login</Link>
            <Link to={"signup"}className="navbartext" >SingUp</Link>
        </div>
    </div>
    )
}