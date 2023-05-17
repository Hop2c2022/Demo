import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import "./profile.css"
import {Classes} from "../components/Classes"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Profile = () => {
    const [about, setAbout] = useState("")
    const user = localStorage.getItem("user_information");
    const user_info = JSON.parse(user)
    const about_me = user_info.about

    if(about_me.length == 0) {
        setAbout = "There is no such information about him"
    }

    const [data, setData] = useState("")
    const navigate = useNavigate();

    const dataRetriever = async () => {
        const user_id = user_info._id;
        await axios({
          url: `https://fk-three.vercel.app/get_class_by_admin/${user_id}`,
          method: "GET",
        }).then( async (response) => {
            setData(response.data)
        });
      }
    useEffect( () => {
        dataRetriever();
    }, []);

    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreen"></div>
                        <div className="downwhite">
                            <div className="theirname">{user_info.username}</div>
                            <div className="line"></div>
                            <div className="description">{user_info.about}</div>
                            {/* <div className="proftag">
                                <div className="tagproff">Designer</div>
                                <div className="tagproff">Student</div>
                                <div className="tagproff">Hop3c</div>
                                <div className="tagproff"></div>
                            </div> */}
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">My classes</div>
                        <div className="classes">
                            <div className="row1">
                                {data.length === 0 ? (
                                    <div className="word">Loading ...</div>
                                ) : (
                                    data.map((userData, i) => {
                                        const number = i + 1
                                        return <Classes name={userData.classname}project={userData.projects.length} number={number}/>
                                })
                            )}
                         </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">MY PROJECTS.</div>
                <div className="theirprojects">
                    <Box2/>
                    <Box2/>
                    <Box2/>
                </div>
                <div className="theirprojects">
                    <Box2/>
                    <Box2/>
                    <Box2/>
                </div>
            </div>
            
        </div>
    )
}
