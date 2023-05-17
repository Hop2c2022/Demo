import "./Classinformation.css"
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {Classes} from "../components/Classes"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Classinformation = () => {
    const class_inf = localStorage.getItem("class_information");
    const class_info = JSON.parse(class_inf)
    const [username, setUsername] = useState("")
    const [members, setMembers] = useState("")


    const Admin = async () => {
        await axios({
          url: `https://fk-three.vercel.app/user/${class_info.admin}`,
          method: "GET",
        }).then((response) => {
            setUsername(response.data.username);
        });
      }

    const Members = async () => {
        await axios({
          url: `https://fk-three.vercel.app/get_members/${class_info._id}`,
          method: "GET",
        }).then((response) => {
            setMembers(response.data);
        });
      }
    useEffect( () => {
        Admin();
        Members();
    }, []);

    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreen"></div>
                        <div style={{display:"flex",width:"100%",flexDirection:"row",alignItems:"center" ,justifyContent:"space-between"}}>
                            <div style={{color:"white",fontSize:"30px",marginLeft:"4%"}}>{class_info.classname}</div>
                            <Link to={"/addmember"} className="newmember" ></Link>
                        </div>
                        <div className="downwhite">
                            <div className="theirname"> Admin: {username}</div>
                            <div className="line"></div>
                            <div className="description">Ene classed zuvhun backend projects oruulah ba public bna shu </div>
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">Hop2c</div>
                        <div className="classes">
                            <div className="row1">
                                <Classes number={"1"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"2"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"3"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"4"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"5"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"6"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"7"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"8"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"9"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"10"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"11"} name={"gishuudiin ners"} project={"23 "}/>
                                <Classes number={"12"} name={"gishuudiin ners"} project={"23 "}/>
                            </div>
                            <div className="row1">
                                {members.length === 0 ? (
                                    <div className="word">No members</div>
                                ) : (
                                    members.map((userData, i) => {
                                        const number = i + 1
                                        return <Classes number={number}  name={userData.username} />
                                })
                            )}
                         </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">ALL PROJECTS.</div>
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
                <div className="theirprojects">
                    <Box2/>
                    <Box2/>
                    <Box2/>
                </div>
            </div>
            
        </div>
    )
}
