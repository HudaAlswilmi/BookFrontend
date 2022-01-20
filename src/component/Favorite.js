import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import {GiReturnArrow} from "react-icons/gi"
import axios from "axios";
import "./Book.css";
//  import { BsFillHeartFill } from "react-icons/bs";
export default function Favirote({ token }) {
  const [Boking, setBoking] = useState([]);
  const [Books, setBooks] = useState([]);
  const [toggel, settoggel] = useState(true);
  const [url, seturl] = useState("");

  useEffect(async () => {
    try {
      if (token) {
        const reult = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Favorite`, {
          headers: { authorization: "Bearer " + token },
        });
        setBooks(reult.data);
        console.log(reult.data, ":ff");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, [token]);

  useEffect(async () => {
    try {
      if (token) {
        const reult = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Favorite2`, {
          headers: { authorization: "Bearer " + token },
        });
        setBoking(reult.data);
        console.log(reult.data, "lllllllol");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, [token]);

  const remove= async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/Favorite2/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(res.data);
    setBoking(res.data);
  };


  const removeFav = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/Favorite/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(res.data);
    setBooks(res.data);
  };

  const changeTpgle = () => {
    settoggel(!toggel);
  };

  return (
    <>
      <button className="toogel"
        onClick={() => {
          changeTpgle();
        }}
      >
<GiReturnArrow/>      </button>
      <div className="cards">
        {toggel === true
          ? Books.map((ele, i) => {
              return (
                <div className="card">
                  <h1>{ele.name}</h1>
                  <img src={ele.img} alr="No img" />
                  <br/>
                  <a href={ele.url} target="_blank">
                    للقرأة أضغط هنا
                  </a>

                  <button
                    onClick={() => {
                      removeFav(ele._id);
                    }}
                  >
                    حذف{" "}
                  </button>
                </div>
              );
            })
          : Boking.map((ele, i) => {
              return (
                <div className="card">
                  <h1>{ele.name}</h1>
                  <img src={ele.img} alr="No img" />
                  <ReactAudioPlayer src={url} autoPlay={false} controls />
                  <button
                    onClick={() => {
                      remove(ele._id);
                    }}
                  >
                    حذف{" "}
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
}
