import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import axios from "axios";
import "./Books.css"
//  import { BsFillHeartFill } from "react-icons/bs";
export default function Favirote({ token }) {
  const [Favorite, setFvairote] = useState([]);
  const [Books, setBooks] = useState([]);

  const [url, seturl] = useState("")



  useEffect(async () => {
    try {
      if (token) {
        const reult = await axios.get("http://localhost:5000/Favorite", {
          headers: { authorization: "Bearer " + token },
        });
        setFvairote(reult.data);
        console.log(reult.data,":ff");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, [token]);


  const removeFav = async (id) => {
    const res = await axios.delete(`http://localhost:5000/Favorite/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(res.data);
    setFvairote(res.data);
  }

  return (
    <div className="cards" >     
      {Favorite.map((ele, i) => {
  return (
        <div className="card" >
          <h1>{ele.name}</h1>
          <p>{ele.descripion}</p>
          <img src={ele.img} alr="No img" />
          <a href={ele.url} target="_blank">
            للقرأة أضغط هنا
          </a>

          <button onClick={() => {
        removeFav(ele._id);
      }}>حذف </button>
        </div>
      )})}
 </div>
);
}
// {Books.map((ele, i) => {
// return (
//   <div className="Audio1">
//     <h1>{Books.name}</h1>
//     <p>{Books.descripion}</p>
//     <img src={Books.img} alr="No img" />
//     <ReactAudioPlayer src={url} autoPlay={false} controls />
//   </div>
// )})}
