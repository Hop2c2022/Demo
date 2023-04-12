import "./styl.css";
import { Link } from "react-router-dom";
export const Navbar = (color) => {
    const colour = {
        backgroundColor: `${color}`
    }
    return(
    <div style={colour} className="navbar">
        <Link to={'/'}>
            <div className="left"></div>
        </Link>
        <div className="right">
            <div className="navbartext">Language</div>
            <div className="navbartext">Class</div>
            <Link className="link" to={"/login"}>
                <div className="navbartext">LogIn</div>
            </Link>
            <Link className="link" to={"/signup"}>
                <div className="navbartext">SignUp</div>
            </Link>
        </div>
    </div>
    )
}