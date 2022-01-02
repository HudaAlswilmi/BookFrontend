import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function AddBook({token}) {
    const [name, setneme] = useState("");
    // const [img, setimg] = useState("");
    const [descripion, setdescripion] = useState("");
    // const [url, seturl] = useState("");
  const [updet, setupdet] = useState([])
  const { id } = useParams();
  console.log("iddddd", id);

    const updetname = (e) => {
      setneme(e.target.value);
    }
    // const updetimg = (e) => {
    //   setimg(e.target.value);
    // }
    const updetdescripion = (e) => {
      setdescripion(e.target.value);
    }
    // const updeturl = (e) => {
    //   seturl(e.target.value);
    // }
  //   const changeePosts = (e) => {
  //     setupdet(e.target.value);
  // };

  const Update = async (id) => {
      try {
          console.log(id,"id");
          const updateP = await axios.put( `http://localhost:5000/BoooK/${id}`, {
            name,
            
            descripion
            
          }, {
              headers: { authorization: "Bearer " + token },
          });
          setupdet(updateP.data)
          console.log(updateP.data,"postUpdate");
      } catch (error) {
          console.log("err",error);
      }
  };

    return (
      <div className="card">   
        <br/>
        <br/>  
        <br/>  
         <input 
          onChange={(e) => {
            updetname(e);
          }}
          type="text"
          placeholder="أدخل أسم الكتاب "
        ></input>
  
        <br/>
        <br/>  
        <br/>
        {/* <input   onChange={(e) => {
            updetimg(e);
          }}
          type="text"
          placeholder="أدخل رابط الصوره  "></input> */}
            <br/>
            <br/>
        <br/>  
        <br/>
        <input  onChange={(e) => {
            updetdescripion(e);
          }}
          type="text"
          placeholder="أدخل وصف الكتاب   "></input>
            <br/>
            <br/>
        <br/>  
        <br/>
  
        {/* <input  onChange={(e) => {
            updeturl(e);
          }}
          type="text"
          placeholder="أدخل رابط الكتاب   "></input> */}
            <br/>
            <br/>
        <br/>  
        <br/>
        <button
          onClick={() => {
            Update(id);
          }}
        >
          تعديل كتاب
        </button>
        {/* <button className="btn"  onClick={() => {  Update(._id); }}> تحرير </button> */}
      </div>
    );
  }
  