import "./footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
    return(
    <div className="footer">
        <div className="container">
            <div className="box_footer">
                <div className="footer_box">
                    <h2 style={{color:"rgb(242, 237, 237)", }} className="footertxt">Calsses</h2>
                    <h4 className="footertxt">Hop2</h4>
                    <h4 className="footertxt">Hop3</h4>
                </div>
                <div className="footer_box">
                    <h2 style={{color:"rgb(242, 237, 237)"}} className="footertxt">Most liked</h2>
                    <h4 className="footertxt">Hop2c</h4>
                    <h4 className="footertxt">Hop3d</h4>
                    <h4 className="footertxt">Hop2b</h4>
                </div>
            </div>
            <div className="box_footer">
                <div className="footer_box">
                    <h2 style={{color:"rgb(242, 237, 237)"}} className="footertxt">Most liked students</h2>
                    <h4 className="footertxt">1.Ginger</h4>
                    <h4 className="footertxt">2.Gundar</h4>
                    <h4 className="footertxt">3.Dondog</h4>
                </div>
                <div className="footer_box">
                    <h2 style={{color:"rgb(242, 237, 237)"}} className="footertxt">Social</h2>
                    <h4 className="footertxt">Facebook</h4>
                    <h4 className="footertxt">Discord</h4>
                </div>
            </div>
        </div>
        
    </div>
    )
}