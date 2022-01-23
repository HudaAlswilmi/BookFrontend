import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./Book1.css";
export default function Book({ token , isAdmin}) {
  const [Book, setBook] = useState([]);
  const [Commint, setCommint] = useState("");

  const { id } = useParams();
  const history = useHistory();



  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Book/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    // console.log("iddddd", id);
    setBook(res.data);
    console.log(res.data, "dooooon");
  }, []);

  const BookCommint = async () => {
    console.log("commmmmint");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/${id}`,
        {
          Commint: Commint,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      console.log("mmmmmm" , result.data);
      setBook({...Book, Commint: result.data });
      console.log("don");
    } catch (err) {
      console.log(err);
    }
  };
  const changeCommint = (e) => {
    setCommint(e.target.value);
  };



  const deleteBookCommint =async (Commint)=>{
    try {
        const result = await axios.put (`${process.env.REACT_APP_BACKEND_URL}/${id}`,

        {Commint:Commint},
        {headers: { authorization: "Bearer " + token }})
        console.log(result.data);
        setBook({...Book , Commint:result.data})
        } catch (err) {
            console.log(err.res.data,"error");
        }
    }
    

  return (
    <div className="oneBookWrapper">
    <div className="book1">
      <h1>{Book.name}</h1>
      <p >{Book.descripion}</p>
      <img className="oneBookImg" src={Book.img} alr="No img" />
      </div>
      <div className="book1">
      <a href={Book.url} target="_blank" className="redingOneBook">
        للقرأة أضغط هنا{" "}
      </a>
      </div>
       <div className="book1">
         <br/>
      <input className="inp1OneBook"
            onChange={(e) => {
              changeCommint(e);
            }}
            type="text"
          />
                   <br/>

          <button className="btn1OneBook"
            onClick={() => {
              BookCommint();
            }}
          >
            اضف تعليق
          </button>  
          </div>
       {Book.Commint && Book.Commint.map((elm, i) => {
                return (
 <div key={i}>
                    <p> {elm.userName}</p>
                    <p>{elm.Commint}</p>
                     <button className="btn1OneBook" onClick={()=>{deleteBookCommint(elm.comment)}}>delet </button> 

                   </div>
               );
              })} 
              <br/>
      {isAdmin == true ? <>
        <button className="btn1OneBook"  onClick={() => {history.push(`/UpdetBook/${id}`); }}> تحرير </button>

          </> :""}

    </div>
  );
}
