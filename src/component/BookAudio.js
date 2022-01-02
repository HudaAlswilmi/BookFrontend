import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookAudio.css"
//صفحة تشغسل الكتب الصوتيه

export default function BookAudio({  token }) {
  const [BookAudio, setBookAudio] = useState([]);
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
    </div>
  );
}
