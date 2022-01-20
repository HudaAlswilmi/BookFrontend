import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {FcLike} from "react-icons/fc"
import {AiTwotoneDelete} from "react-icons/ai"

import axios from "axios";
import "./Book.css";
//صفحة الكتب المقروءة 
export default function Booking({ token ,isAdmin}) {
  const [Books, setBooking] = useState([]);
  const [search, setsearch] = useState("");
// const [name, setname] = useState("")
// const [descripion, setdescripion] = useState("")
// const [url, seturl] = useState("")
// const [img, setimg] = useState("")
  const history = useHistory();

  console.log("boooooooooooooooook");

  useEffect(async () => {
    console.log(token);
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Booking`, {
      headers: { authorization: "Bearer " + token },
    });
    //يظهر البيانات مرة وحده ب استخدام الميثود قيت
    console.log(res.data);
    setBooking(res.data);
    console.log("b9999k");
  }, []);

  const deleteBook = async (id, index) => {
    console.log("jjjjjjjjjjj");
    const deletes = await
     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/BoooK/${id}`,{
      headers: { authorization: "Bearer " + token },

     });
     console.log("LLLLLLLLLLLLLLLLLLL");
    if (deletes.data) {
      const copyBook = [...Books];
      console.log("ooooooooooooooo");
      copyBook.splice(index, 1);
      setBooking(copyBook);
    }
  }
  const search1 = () => {
    const search1 = Books.filter((element) => {
      if (element.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return element;
      }
      console.log(element);
    });
    setBooking(search1);
    return search1;
  };


  const gotoBook = async (id) => {
    history.push(`/Book/${id}`);
    console.log(" you go to the boook");
  };


const searchTarget = (e) => {
  setsearch(e.target.value);
};



const AddlikBook = async (id) => {
  console.log(id,"id");
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/Favorite/${id}`,
      {},
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    console.log("oooollllllllll",result.data);
  } catch (error) {
    console.log(error.response.data);
  }
  
};



  return (
    <div className="cards">
    {/* <input
    id="inputSearch"
    placeholder="search"
    onChange={(e) => {
      searchTarget(e);
    }}
  /><br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
  
      <button id="searchbtn"
      onClick={() => {
        search1();
      }}
    > بحث </button>
     <br/>
  <br/>
  <br/> */}
  <br/>
  <br/>
      {Books.map((ele, i) => {
        console.log("nnnnnnnnnnnnn");
        return (
          <div className="card" key={i}>
            <h1>{ele.name}</h1>
            <p>{ele.descripion}</p>
            <img className="di"
              src={ele.img}
              onClick={() => {
                gotoBook(ele._id);
              }}
              alr="No img"
            />
            <br/>

            
            <FcLike
                className="HEART"
            onClick={()=>AddlikBook(ele._id)}
              />
             {isAdmin == true ? <>
              <button
              onClick={() => {
                deleteBook(ele._id ,i);
              }}
            ><AiTwotoneDelete/>
              حذف 
            </button>

          </> :""}
       

          </div>
        );
      })}
    </div>
  );
}
