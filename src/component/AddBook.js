import React, {useState} from "react";
import axios from "axios";

//أضافة كتب 

export default function AddBook({token}) {
  const [name, setneme] = useState("");
  const [img, setimg] = useState("");
  const [descripion, setdescripion] = useState("");
  const [url, seturl] = useState("");
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
      "http://localhost:5000/Book",
      {
        name,
        img,
        descripion,
        url,
      },
      { headers: { authorization: `Bearer ${token}` } }
    );
  };
  return (
    <div className="card">   
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
          <br/>
          <br/>
      <br/>  
      <br/>
      <button
        onClick={() => {
          postBook();
        }}
      >
        أضافة كتاب
      </button>
    </div>
  );
}
