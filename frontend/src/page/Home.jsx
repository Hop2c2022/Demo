import "./Home.css"
import {Box} from "../components/Box"
import {Box2} from "../components/Box2"
export const Home = () => {
  function click() {
    console.log("s");
  }
          
          return ( 
            <div className="Home">
            <div className="box">
                <h1>Pinecone academy designers work of 2023</h1>
                <input placeholder="Search here ..." className="search"></input>
            </div>
            <div className="Middle">
              <h2 style={{marginTop:"5%"}}>Trending designs</h2>
            <div className="Box1">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <h2 style={{marginTop:"8%"}}>Latest</h2>
            <div className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div style={{marginTop:"5%"}} className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2>See more</h2>
            </button>
            </div>


            <div style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>

            <h2 style={{marginTop:"8%"}}>Popular</h2>
            <div className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div style={{marginTop:"5%"}} className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2>See more</h2>
            </button>
            </div>

            <div style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>

            <h2 style={{marginTop:"8%"}}>Infographics</h2>
            <div className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div style={{marginTop:"5%"}} className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2>See more</h2>
            </button>
            </div>
            </div>
        </div>

            
          ); 
    
}
