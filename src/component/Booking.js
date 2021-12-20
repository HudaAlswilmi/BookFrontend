import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
 
import axios from "axios";
import "./Books.css";
export default function Booking({ token }) {
  const [Booking, setBooking] = useState([]);
  const history=useHistory()

  console.log("boooooooooooooooook");

  useEffect(async () => {
    console.log(token);
    const res = await axios.get("http://localhost:5000/Booking", {
      headers: { authorization: "Bearer " + token },
    });
    //يظهر البيانات مرة وحده ب استخدام الميثود قيت 
    console.log(res.data);
    setBooking(res.data);
    console.log("b9999k");
  }, []);
  const gotoBook=async(id)=>{
  
    history.push("/Book")
    console.log(" you go to the boook");

  }

  return (
    <div className="cards">
      {Booking.map((ele, i) => {
        console.log("nnnnnnnnnnnnn");
        return (
          <div className="card" key={i}>
            <h1>{ele.name}</h1>
            <p>{ele.descripion}</p>
            <img src={ele.img}onClick={()=>{gotoBook(ele._id)}}  alr="No img" />
            <a href={ele.url} target="_blank" >click hear</a>
          </div>
        );
      })}
    </div>
  );
}
