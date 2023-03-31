import "./styl.css";
export const Navbar = () => {
    return(
    <div className="navbar">
        <div className="left"></div>
        <div className="right">
            <div className="navbartext">Language</div>
            <button className="navbartext">Class</button>
            <div className="navbartext">LogIn</div>
            <div className="navbartext">SignUp</div>
        </div>

    </div>
    )
}