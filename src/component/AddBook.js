import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import {GiReturnArrow} from "react-icons/gi"
import "./Login.css"
import axios from "axios";

//أضافة كتب 

export default function AddBook({token}) {
  const [name, setneme] = useState("");
  const [img, setimg] = useState("");
  const [descripion, setdescripion] = useState("");
  const [url, seturl] = useState("");
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [toggel, settoggel] = useState(true);

  // const types = ['audio/mp3'];
  const types = ['audio/mpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an audio file (mp3)');
    }
    console.log("url",url)
    seturl(e.target.value);

  };
  const addname = (e) => {
    setneme(e.target.value);
  }
  const addimg = (e) => {
    setimg(e.target.value);
  }
  const adddescripion = (e) => {
    setdescripion(e.target.value);
  }
  const addurl = (e) => {
    seturl(e.target.value);
  }
  const postBook = async (id) => {
    const result = await axios.post(
      "http://localhost:5000/AudioBooking",
      {
        name,
        img,
        descripion,
        url,
      },
      { headers: { authorization: `Bearer ${token}` } }
    );
    history.push(`/Books`);
    console.log(" you go to the boook");
  };

  const changeTpgle = () => {
    settoggel(!toggel);
  };



 
  return (<>
    <button className="toogel"
    onClick={() => {
      changeTpgle();
    }}
  >
<GiReturnArrow/>  
    </button>

    <div className="addBokdiv">   
      <br/>
      <br/>  
      <br/>  
  
       <input 
        onChange={(e) => {
          addname(e);
        }}
        type="text"
        placeholder="أدخل أسم الكتاب "
      ></input>

      <br/>
      <br/>  
      <br/>
      <input   onChange={(e) => {
          addimg(e);
        }}
        type="text"
        placeholder="أدخل رابط الصوره  "></input>
          <br/>
          <br/>
      <br/>  
      <br/>
      <input  onChange={(e) => {
          adddescripion(e);
        }}
        type="text"
        placeholder="أدخل وصف الكتاب   "></input>
          <br/>
          <br/>
      <br/>  
      <br/>

      <input  onChange={(e) => {
          addurl(e);
        }}
        type="text"
        placeholder="أدخل رابط الكتاب   "></input>
            <form>
      <label>
        <input type="file" onChange={handleChange} />
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} seturl={seturl}/> }
      </div>
    </form>
          <br/>
          <br/>
      <br/>  
      <br/>
      <button className="but1"
        onClick={() => {
          postBook();
        }}
      >
        أضافة كتاب
      </button>
    
    </div>

  

    </>

  );
}




// {toggel === true ?{} : {} }
