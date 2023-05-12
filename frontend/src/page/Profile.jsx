
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {Classes} from "../components/Classes"
import { Link } from "react-router-dom";


export const Profile = () => {
    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreenprof"></div>
                        <div className="downwhite">
                            <div className="theirname">Tugsbileg</div>
                            <div className="line"></div>
                            <div className="description">Hola im a designer and im ready to help :D</div>
                            <div className="proftag">
                                <div className="tagproff">Designer</div>
                                <div className="tagproff">Student</div>
                                <div className="tagproff">Hop3c</div>
                            </div>
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">My classes</div>
                        <div className="classes">
                            <div className="row1">
                                <Classes name={"classuudiin ner"}project={"23 "} number={"1"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"2"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"3"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"4"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"5"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"6"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">MY PROJECTS.</div>
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
