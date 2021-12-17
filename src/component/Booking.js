import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Books.css"
export default function Booking({ token }) {
  const [Booking, setBooking] = useState([]);
  console.log("boooooooooooooooook");

  useEffect(async () => {
    console.log(token);
    const res = await axios.get("http://localhost:5000/Booking", {
      headers: { authorization: "Bearer " + token },
      
    });  
    console.log(res.data);
    setBooking(res.data);
    console.log("b9999k");
  }, []);

// const play = (i)=>{
//   if(Booking[i].id == 1) {
//     url.play();

// }}
  return (
      <div className="cards">

      {Booking.map((ele, i) => {
              console.log("nnnnnnnnnnnnn");
        return (
          <div className="card" key={i}>
            <h1>{ele.name}</h1>
            <p>{ele.descripion}</p>
            <img src={ele.img} alr="No img" />
       <button> <a href="">اضغط هنا </a> </button>
          </div>
        );
      })}
    </div>

  );
}

