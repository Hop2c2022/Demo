import "./class.css"
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {StarIcon} from "../components/Star"

export const HomeProjectbox = () => { 

    return (
        <div className="ProjectBoxs">
            <Navbar/>
            <div className="Middle">
                    <div className="flexit">
                        <div className="projectboximg"></div>
                        <div>

                            <div className="rightsidehome">
                                <div className="upgreenho">
                                    <div className="whiteho">Project name: Богиноо</div>
                                </div>
                                <div className="starrate" >
                                    <div className="rate">Rate:</div>
                                    <div className="star">
                                        <StarIcon width={"5%"}/>
                                        <StarIcon width={"5%"}/>
                                        <StarIcon width={"5%"}/>
                                        <StarIcon width={"5%"}/>
                                        <StarIcon width={"5%"}/>
                                    </div>
                                </div>
                                
                                <div className="downwhite">
                                    <div className="theirname">Tugsbileg</div>
                                    <div className="line"></div>
                                    <div className="description">I am ze guy who made this  "URL bogino bolgodog web"</div>
                                </div>
                            </div>
                            <div className="Urlbox">
                                <div className="hd">Nothing is better than the real one. Checkout!</div>
                                <a href="https://boginoo.firebaseapp.com/" className="href"> ^Click here^ </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="myprojectsho">MY PROJECTS.</div>
                    <div className="theirprojectsho">
                        <Box2/>
                        <Box2/>
                        <Box2/>
                    </div>
                    <div className="theirprojectsho">
                        <Box2/>
                        <Box2/>
                        <Box2/>
                    </div>
            </div>
        </div>
    )
}