import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Book.css";
//صفحة تشغسل الكتب الصوتيه

export default function BookAudio({ token }) {
  const [BookAudio, setBookAudio] = useState(null);
  const [Commint, setCommint] = useState("");
  const [url, seturl] = useState("");
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

  const addComment = async () => {
    console.log("jjjjj");
    try {
      const result = await axios.post(
        `http://localhost:5000/Commint/${id}`,
        {
          Commint: Commint,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      console.log("mmmmmm" , result.data);
      setBookAudio({...BookAudio, Commint: result.data });
      console.log("don");
    } catch (err) {
      console.log(err);
    }
  };

  const changeCommint = (e) => {
    setCommint(e.target.value);
  };

  const audio = new Audio(url);
  console.log(url, "url");
  const play = () => {
    audio.play();
  };

  const pause = () => {
    console.log("iiiiiiiiiiiiiii");
    if (audio) audio.pause();
  };

  const deleteCommint =async (Commint)=>{
    try {
        const result = await axios.put(`http://localhost:5000/Commint/${id}`,

    {Commint:Commint},
    {headers: { authorization: "Bearer " + token }})
    console.log(result.data);
    setBookAudio({...BookAudio , Commint: result.data})
    } catch (err) {
        console.log(err.res.data,"error");
    }
}

  return (
    <div className="card">
      {BookAudio ? (
        <div>
          <img src={BookAudio.img} alr="No img" />

          <h1>{BookAudio.name}</h1>
          <p>{BookAudio.descripion}</p>

          <ReactAudioPlayer src={url} autoPlay={false} controls />
          
          <input
            onChange={(e) => {
              changeCommint(e);
            }}
            type="text"
          />
          <button
            onClick={() => {
              addComment();
            }}
          >
            اضف تعليق
          </button>
          <div>
            <h1>
              {BookAudio.Commint.map((elm, i) => {
                return (
 <div key={i}>
                    <p> {elm.userName}</p>
                    <p>{elm.Commint}</p>
                    <button onClick={()=>{deleteCommint(elm.comment)}}>delet </button>

                  </div>
                );
              })}
            </h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
