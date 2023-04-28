import "./Home.css"
import {Box} from "../components/Box"
import {Box2} from "../components/Box2"
import {Navbar} from "../components/Navbar"
import { Link } from "react-router-dom";
export const Home = () => {
          return ( 
            <div className="Home">
                <Navbar/>
                <section>
                    <h1 className="title">Pinecone academy works of 2023</h1>
                  <div class='air air1'></div>
                  <div class='air air2'></div>
                  <div class='air air3'></div>
                  <div class='air air4'></div>
                </section>
                <div className="middlebigword">See others WORK and make it your new idea IDEA</div>
            <div className="Middle">
                <div style={{width:"100%"}}>
                    <h2 className="ani" style={{marginTop:"5%", marginBottom:"1%", color:"grey"}}>Trending</h2>
                </div>
              
            <div className="scroll_box">
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box/></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box /></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box /></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box /></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box /></Link>
                <Link style={{marginLeft:"1%",textDecoration:"none"}} to={"/homeprojectbox"}><Box /></Link>
            </div>
            <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%", color:"grey"}}>Latest</h2>
            </div>
            
            <div className="Box1">
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
            </div>

            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2 style={{fontSize:"1.1em"}}>See more</h2>
            </button>
            </div>


            <div className="ani" style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>
            <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%", color:"grey"}}>Popular</h2>
            </div>
            
            <div className="Box1">
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
            </div>
            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2 style={{fontSize:"1.1em"}}>See more</h2>
            </button>
            </div>

            <div className="ani" style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>
            <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%", color:"grey"}}>Infographics</h2>
            </div>
            
            <div className="Box1">
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
                <Link style={{textDecoration:"none"}} to={"/homeprojectbox"}><Box2 /></Link>
            </div>

            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2 style={{fontSize:"1.1em"}}>See more</h2>
            </button>
            </div>
            </div>
        </div>
          ); 
    
}
