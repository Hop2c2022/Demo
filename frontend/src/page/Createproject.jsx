import "./Create.css"
import { Link } from "react-router-dom";
import  axios from "axios"
import { useState } from "react";

//   sendproject  {
//   url: url,
//   title: title,
//   word: word,
//   classname: classname,
//   class_id: class_id,
//   comments: comments,
// }
export const Createproject = () => {
  const [ url, setUrl ] = useState()
const [ title, setTitle ] = useState()
const [ word, setWord ] = useState()
const [ classname, setClassname ] = useState()

const handleChange1 = (event) => {
    setClassname(event.target.value);
  };
  const handleChange2= (event) => {
    setTitle(event.target.value);
  };
  const handleChange3= (event) => {
    setWord(event.target.value);
  };
  const handleChange4= (event) => {
    setUrl(event.target.value);
  };
  const Createproject = async () => {
    const result = await axios.post('http://localhost:8000/project',{
            url: url,
            title: title,
            word: word,
            classname: classname,
            user_id: "645212a1c122f09ee4e37e59"
      })
      console.log(result)
  }

    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
        <div className="full1">
            <div style={{margin:"5%"}} className="title1">Create project</div>
        <div className="fullinput">
          <div className="holder">Which class do you want to add project</div>
          <input id="classname" onChange={handleChange1} className="inpat" type="text" placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Project title</div>
          <input id="title" onChange={handleChange2} className="inpat" type="text" placeholder="Enter the title" />
        </div>
        <div className="fullinput">
          <div className="holder">Description</div>
          <input id="word" onChange={handleChange3} className="inpat" type="text" placeholder="Enter the paragraph" />
        </div>
        <div className="fullinput">
          <div className="holder">URL to your project</div>
          <input id="" onChange={handleChange4} className="inpat" type="text" placeholder="paste your project url" />
        </div>
        <input  onClick={Createproject}  className="button" type="button" value={"Create project"} />
        </div>  
    </div>
  };        