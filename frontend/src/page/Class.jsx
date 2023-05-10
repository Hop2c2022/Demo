import "./class.css"
import {Navbar} from "../components/Navbar"
import {ClassBox} from "../components/classBox"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios from "axios";
export const Class = () => {
    const [data, setData] = useState("")
    const navigate = useNavigate();

    // const checkUser = () => {
    //   const isuser = localStorage.getItem("user_inf");
    //   if (isuser) navigate("/");
    // };
    
    const ClassCard = ({ userData }) => {
        <div className="classBox">
            <div className="miniBox">
                <h2 className="title">{userData.classname}</h2>
                <h3 className="information"> 20 members | 24 projects</h3>
            </div>
        </div>
        
      };


    const dataRetriever = async () => {
        await axios({
          url: `http://localhost:8000/class`,
          method: "GET",
        }).then((response) => {
          setData(response.data.data)
        });
      }
    console.log(data);
    useEffect( () => {
        dataRetriever();
    }, []);

    const [output1] = useState(data);

    return (
        <div className="class">
            <Navbar/>
            <div className="Middle">
                <h1 style={{fontWeight:"300", fontSize:"300%", color:"grey", marginTop:"7%"}}>Which class do you wanna visit?</h1>
                <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"10%", marginBottom:"1%", color:"grey"}}>Trending</h2>
                </div>
                    <div className="Boxs">
                    <div className="movie_box">
        <div style={{ display: "flex" }}>
          {output1.length === 0 ? (
            <div className="word">Error</div>
          ) : (
            output1.map((userData, i) => {
              return <ClassCard userData={userData} key={i} />;
            })
          )}
        </div>
      </div>
                        <ClassBox/>
                    </div>
                    
            </div>
        </div>
    )
}