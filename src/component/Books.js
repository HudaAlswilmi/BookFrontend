import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {FcLike} from "react-icons/fc"
import {AiTwotoneDelete} from "react-icons/ai"
//صفحة بيانات الكتب الصوتيه
import axios from "axios";
import "./Book.css";

export default function Books({ token ,isAdmin}) {
  const [Books, setBooks] = useState([]);
  const history = useHistory();

  console.log("book");

  useEffect(async () => {
    console.log(token);
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/AudioBook`, {
      headers: { authorization: "Bearer " + token },
    });
    //يظهر البيانات مرة وحده ب استخدام الميثود قيت
    console.log(res.data);
    setBooks(res.data);
    console.log("b9999k");
  }, []);

  

  const AddAudioLike = async (id) => {
    try {
      console.log(id ,"id");
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/Favorite2/${id}`,
        {},
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log("jjjj",result.data);
    } catch (error) {
      console.log(error.response.data);
    }
    
  };

  const deleteAudio = async (id, index) => {
    console.log("jjjjjjjjjjj");
    const deletes = await
     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/AudioBooking/${id}`,{
      headers: { authorization: "Bearer " + token },

     });
     console.log("LLLLLLLLLLLLLLLLLLL");
    if (deletes.data ) {
      const copyBook = [...Books];
      console.log("ooooooooooooooo");
      copyBook.splice(index, 1);
      setBooks(copyBook);
    }
  }

  const gotoBook = async (id) => {
    history.push(`/AudioBook/${id}`);
    console.log(" you go to the boook");
  };

  return (
    <>

<div className="cards">
        {Books.map((elemen, i) => {
          return (
            <div className="card" key={i}>
   

              <p className="nam1">{elemen.name}</p>
               {/* <BookAudio url ={elemen.url} />  */}

               <img className="di"
                src={elemen.img}
                onClick={() => {
                  gotoBook(elemen._id);
                }}
              />
              <br/>
                  <FcLike
                className="HEART"
            onClick={()=>AddAudioLike(elemen._id)}
              /> 
                {isAdmin == true ? <>
              <button
              onClick={() => {
                deleteAudio(elemen._id ,i);
              }}
            ><AiTwotoneDelete/>
              حذف 
            </button>

          </> :""}
               </div>
         
          );
        })}
      </div>
    </>
  );
}
