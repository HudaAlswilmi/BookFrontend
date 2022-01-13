import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./Book.css";
export default function Book({ token , isAdmin}) {
  const [Book, setBook] = useState([]);
  const [Commint, setCommint] = useState("");

  const { id } = useParams();
  const history = useHistory();



  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Book/${id}`, {
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
        `http://localhost:5000/BookCommint/${id}`,
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
        const result = await axios.put(`http://localhost:5000/BookCommint/${id}`,

        {Commint:Commint},
        {headers: { authorization: "Bearer " + token }})
        console.log(result.data);
        setBook({...Book , Commint:result.data})
        } catch (err) {
            console.log(err.res.data,"error");
        }
    }
    

  return (
    <div className="Book1">
      <h1>{Book.name}</h1>
      <p >{Book.descripion}</p>
      <img className="imgbook" src={Book.img} alr="No img" />
      <a href={Book.url} target="_blank" className="reding">
        للقرأة أضغط هنا{" "}
      </a>

      <input className="inp1"
            onChange={(e) => {
              changeCommint(e);
            }}
            type="text"
          />
          <button className="btn1
"
            onClick={() => {
              BookCommint();
            }}
          >
            اضف تعليق
          </button>  
          <br/>
       {Book.Commint && Book.Commint.map((elm, i) => {
                return (
 <div key={i}>
                    <p> {elm.userName}</p>
                    <p>{elm.Commint}</p>
                     <button onClick={()=>{deleteBookCommint(elm.comment)}}>delet </button> 

                   </div>
               );
              })} 
      {isAdmin == true ? <>
        <button className="btn"  onClick={() => {history.push(`/UpdetBook/${id}`); }}> تحرير </button>

          </> :""}

    </div>
  );
}
