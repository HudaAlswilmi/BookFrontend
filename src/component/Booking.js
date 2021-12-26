import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {BsFillStarFill} from "react-icons/bs"
import {AiTwotoneDelete} from "react-icons/ai"
import axios from "axios";
import "./Books.css";
export default function Booking({ token }) {
  const [Books, setBooking] = useState([]);
  // const [name, setneme] = useState("")
  // const [img, setimg] = useState("")
  // const [descripion, setdescripion] = useState("")
  // const [url, seturl] = useState("")
  const history = useHistory();

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
  const gotoBook = async (id) => {
    history.push("/Book");
    console.log(" you go to the boook");
  };
  const deleteBook = async (id, index) => {
    console.log("jjjjjjjjjjj");
    const deletes = await
     axios.delete(`http://localhost:5000/BoooK/${id}`,{
      headers: { authorization: "Bearer " + token },

     });
     console.log("LLLLLLLLLLLLLLLLLLL");
    if (deleteBook.data === "deleted") {
      const copyBook = [...Books];
      console.log("ooooooooooooooo");
      copyBook.splice(index, 1);
      setBooking(copyBook);
    }
  }
  const gotoFevoret = async (id) => {
    history.push("/Favorite");
    console.log(" you go to the Favorite");
  };
//   const postBook = async ()=>{
//     const result = await axios.post( "http://localhost:5000/Book",{
//     name,
//     img,
//     descripion,
//     url,
//   }
//       , { headers: { authorization: `Bearer ${token}` }},
// );

//   }

  return (
    <div className="cards">
      {Books.map((ele, i) => {
        console.log("nnnnnnnnnnnnn");
        return (
          <div className="card" key={i}>
            <h1>{ele.name}</h1>
            <p>{ele.descripion}</p>
            <img
              src={ele.img}
              onClick={() => {
                gotoBook(ele._id);
              }}
              alr="No img"
            />
            <br/>
            <a href={ele.url} target="_blank">
للقرأة أضغط هنا             </a>
            <br/>
            <BsFillStarFill onClick={()=>{gotoFevoret(ele._id)}}></BsFillStarFill>
            <button
              onClick={() => {
                deleteBook(ele._id);
              }}
            ><AiTwotoneDelete/>
              حذف
            </button>
          </div>
        );
      })}
    </div>
  );
}
