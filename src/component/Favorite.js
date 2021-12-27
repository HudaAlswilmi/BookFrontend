import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Books.css"
//  import { BsFillHeartFill } from "react-icons/bs";
export default function Favirote({ token }) {
  const [Favorite, setFvairote] = useState([]);
  const { id } = useParams();

  // useEffect(async () => {
  //   console.log(token,"token");
  //   const like = await axios.get(`http://localhost:5000/Favorite/${id}`, {
  //     headers: { authorization: "Bearer " + token },
  //   });
  //   setFvairote(like.data);
  //   console.log(like.data,"likes array");
  // }, []);


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
        </div>
      )})}
 </div>
);
}