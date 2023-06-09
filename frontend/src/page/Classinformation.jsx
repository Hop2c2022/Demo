import "./Classinformation.css"
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {Classes} from "../components/Classes"
import { Link } from "react-router-dom";

export const Classinformation = () => {
    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreen"></div>
                        <div style={{display:"flex",width:"100%",flexDirection:"row",alignItems:"center" ,justifyContent:"space-between"}}>
                            <div style={{color:"white",fontSize:"30px",marginLeft:"4%"}}>ClassName</div>
                            <Link to={"/addmember"} className="newmember" ></Link>
                        </div>
                        <div className="downwhite">
                            <div className="theirname"> Admin: Bilguudei, TugsErdene</div>
                            <div className="line"></div>
                            <div className="description">Ene classed zuvhun backend projects oruulah ba public bna shu </div>
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">Hop2c</div>
                        <div className="classes">
                            <div className="row1">
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"1"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"2"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"3"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"4"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"5"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"6"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"7"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"8"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"9"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"10"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"11"} name={"gishuudiin ners"} project={"23 "}/></Link>
                            <Link style={{textDecoration:"none"}} to={"/profile"}><Classes number={"12"} name={"gishuudiin ners"} project={"23 "}/></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">ALL PROJECTS.</div>
                <div className="theirprojects">
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                </div>
                <div className="theirprojects">
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                </div>
                <div className="theirprojects">
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box2/></Link>
                </div>
            </div>
            
        </div>
    )
}
