import React, { useState, useEffect } from "react";
import BookAudio from "./BookAudio";
// import { useHistory } from "react-router-dom";
//صفحة بيانات الكتب الصوتيه 
import axios from "axios";
import "./Books.css";

export default function Books({ token }) {
  const [Books, setBooks] = useState([]);
  // const history = useHistory();

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
  // let audio

  // const play = (url, i, id) => {
  //   console.log(id, "iddd");
  //   console.log(url, "ur");
  //   console.log(i, "iiiiiiiii");
  //   audio= new Audio(url);
  //   audio.play();
  // };

  // const pause = () => {
  //   console.log("iiiiiiiiiiiiiii");
  //   if(audio) 

  //   audio.pause();
  //   console.log("huuuuuuuuuuuuuuuuuuu");
  // };

  return (
    <>
      <h1> $$ مكتبة أبجد $$ </h1>

      <div className="cards">
        {Books.map((elemen, i) => {
          return (
            <div className="card">
              <img className="imgCard" src={elemen.img} />

              <p className="nam1">{elemen.name}</p>
              <BookAudio url ={elemen.url} />
        
            </div>
          );
        })}
      </div>
    </>
  );
}
