import "./class.css"
import {Navbar} from "../components/Navbar"
import {ClassBox} from "../components/classBox"
export const Class = () => { 
    return (
        <div className="class">
            <Navbar/>
            <div className="Middle">
                <h1 style={{fontWeight:"300", fontSize:"300%", color:"grey", marginTop:"7%"}}>Which class do you wanna visit?</h1>
                <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"10%", marginBottom:"1%", color:"grey"}}>Trending</h2>
                </div>
                    <div className="Boxs">
                        <ClassBox width={"450px"}/>
                        <ClassBox/>
                        <ClassBox/>
                        <ClassBox/>
                        <ClassBox/>
                        <ClassBox/>
                        <ClassBox/>
                        <ClassBox/>
                        <ClassBox/>
                    </div>
                    
            </div>
        </div>
    )
}