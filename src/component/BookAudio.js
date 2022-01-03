import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookAudio.css"
//صفحة تشغسل الكتب الصوتيه

export default function BookAudio({  token }) {
  const [BookAudio, setBookAudio] = useState([]);
  const [Commint, setCommint] = useState("");
  const [url, seturl] = useState("")
  const { id } = useParams();

  useEffect(async () => {
    console.log("jjjjjjjjjjjjjjjj");
    const result = await axios.get(`http://localhost:5000/AudioBook/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log("iddddd", id);
    setBookAudio(result.data);
    seturl(result.data.url);

    console.log(result.data, "dooooon");
    console.log(result.data.url, "iiiiiiiiiiiii");

  }, []);


  const addComment=async()=>{
    console.log("jjjjj");
    try {
      const result = await axios.post(
          `http://localhost:5000/Commint/${id}`,
          {
              Commint:Commint
          },
          { headers: { authorization: "Bearer " + token } }
        );console.log("mmmmmm");
        setBookAudio({...BookAudio , Commint: result.data.Commint})
        console.log("don");
    } catch (err) {
        console.log(err);
    }
}

const changeComment=(e)=>{
  setCommint(e.target.value)
}

  const audio = new Audio(url);
  console.log(url, "url");
  const play = () => {
    audio.play();
  };

  const pause = () => {
    console.log("iiiiiiiiiiiiiii");
    if (audio) audio.pause();
  };




  return (
    <div className="Audio1">
      <h1>{BookAudio.name}</h1>
      <p>{BookAudio.descripion}</p>
      <img src={BookAudio.img} alr="No img" />
      <ReactAudioPlayer src={url} autoPlay={false} controls />
      <input onChange={(e)=>{changeComment(e)}} type="text" />
      <button onClick={()=>{addComment()}}>اضف تعليق</button>
    </div>
  );
}
