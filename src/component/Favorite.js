import React, { useState, useEffect } from "react";
import axios from "axios";
//  import { BsFillHeartFill } from "react-icons/bs";
export default function Favirote({ token }) {
  const [Favorite, setFvairote] = useState([]);

  useEffect(async () => {
    try {
      console.log("hhhhhhhhhhhhhhh");
      if (token) {
        const Favorites = await axios.get(`http://localhost:5000/Favorite/`, {
          headers: { authorization: "Bearer " + token },
        });
        setFvairote(Favorites.data);
        console.log(Favorites.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  return (
    <div>
      {Favorite.map((elem, i) => {
        return (
       
                  <div className="card" key={i}>
                    <h1>{elem.name}</h1>
                    <p>{elem.descripion}</p>
                    <img
                      src={elem.img}
                    
                      alr="No img"
                    />
                    <a href={elem.url} target="_blank">
                    للقرأة أضغط هنا                        </a>
                   
                  </div>
                );
              })}
            </div>
          );
        }