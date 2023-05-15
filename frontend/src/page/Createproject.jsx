import "./Create.css"
import { Link } from "react-router-dom";
import  axios from "axios"
import React, { useState } from "react";
import {Navbar} from "../components/Navbar"
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

const [selectedImages, setSelectedImages] = useState([]);

const onSelectFile = (event) => {
  const selectedFiles = event.target.files;
  const selectedFilesArray = Array.from(selectedFiles);

  const imagesArray = selectedFilesArray.map((file) => {

    return URL.createObjectURL(file);

  });
  setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  event.target.value = "";
};

function deleteHandler(image) {
  setSelectedImages(selectedImages.filter((e) => e !== image));
  URL.revokeObjectURL(image);
}
console.log(selectedImages);
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
    const result = await axios.post('https://fk-three.vercel.app/project',{
            url: url,
            title: title,
            word: word,
            classname: classname,
            user_id: "645212a1c122f09ee4e37e59"
      })
  }

    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Navbar/>
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
        <div className="fullinput">
          <div className="holder">Image</div>
          <div>
            <form action="" onClick={()=>document.querySelector(".holderimg").click()}>
              <div className="insideuy">Upload Image</div>
            <input
          className="holderimg"
          type="file"
          name="images"
          hidden
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
        <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
              </div>
            );
          })}
      </div>

            </form>
            {selectedImages.length > 0 &&
        (selectedImages.length > 1 ? (
          <p className="error">
            You can't upload more than 1 image! <br />
            <span>
              please delete <b> {selectedImages.length - 1} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD PROJECT
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}



    </div>
        </div>
{/*         
        <Link to={"/"}><input className="button" type="button" value={"Go back to home"} /></Link> */}
        </div>  
    </div>
  };        