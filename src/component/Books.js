import React, { useState, useEffect } from "react";
import BookAudio from "./BookAudio";
import { useHistory } from "react-router-dom";
import {BsFillHeartFill} from "react-icons/bs"
//صفحة بيانات الكتب الصوتيه
import axios from "axios";
import "./Books.css";

export default function Books({ token }) {
  const [Books, setBooks] = useState([]);
  const history = useHistory();

  console.log("book");

  useEffect(async () => {
    console.log(token);
    const res = await axios.get("http://localhost:5000/AudioBook", {
      headers: { authorization: "Bearer " + token },
    });
    //يظهر البيانات مرة وحده ب استخدام الميثود قيت
    console.log(res.data);
    setBooks(res.data);
    console.log("b9999k");
  }, []);

  

  const AddlikBook = async (id) => {
    try {
      const result = await axios.post(
        `http://localhost:5000/Favorite/${id}`,
        {},
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
    
  };


  const gotoBook = async (id) => {
    history.push(`/AudioBook/${id}`);
    console.log(" you go to the boook");
  };

  return (
    <>
      <h1> $$ مكتبة أبجد $$ </h1>

      <div className="cards">
        {Books.map((elemen, i) => {
          return (
            <div className="card">
              <div>
              <img
                className="imgCard"
                src={elemen.img}
                onClick={() => {
                  gotoBook(elemen._id);
                }}
              />
              </div>
               <BsFillHeartFill
                className="HEART"
            onClick={()=>AddlikBook(elemen._id)}
              />
<div>

              <p className="nam1">{elemen.name}</p>
               {/* <BookAudio url ={elemen.url} />  */}
               </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
