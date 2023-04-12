import "./Home.css"
import {Box} from "../components/Box"
import {Box2} from "../components/Box2"
import {Navbar} from "../components/Navbar"
export const Home = () => {
          
          return ( 
            <div className="Home">
                <Navbar/>
                <section>
                    <h1 style={{fontSize:"200%", marginTop:"5%", color:"white"}}>Pinecone academy designers work of 2023</h1>
                  <div class='air air1'></div>
                  <div class='air air2'></div>
                  <div class='air air3'></div>
                  <div class='air air4'></div>
                </section>
            <div className="Middle">
              <h2 className="ani" style={{marginTop:"5%", marginBottom:"1%"}}>Trending designs</h2>
            <div className="Box1">
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%"}}>Latest</h2>
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
            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2>See more</h2>
            </button>
            </div>


            <div className="ani" style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>

            <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%"}}>Popular</h2>
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
            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2>See more</h2>
            </button>
            </div>

            <div className="ani" style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>

            <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%"}}>Infographics</h2>
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
            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2>See more</h2>
            </button>
            </div>
            </div>
        </div>

            
          ); 
    
}
