import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {BsFillHeartFill} from "react-icons/bs"
import {AiTwotoneDelete} from "react-icons/ai"
import axios from "axios";
import "./Books.css";
//صفحة الكتب المقروءة 
export default function Booking({ token }) {
  const [Books, setBooking] = useState([]);
  const [search, setsearch] = useState("");
const [name, setname] = useState("")
const [descripion, setdescripion] = useState("")
const [url, seturl] = useState("")
const [img, setimg] = useState("")
  const history = useHistory();

  console.log("boooooooooooooooook");

  useEffect(async () => {
    console.log(token);
    const res = await axios.get("http://localhost:5000/Booking", {
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
     axios.delete(`http://localhost:5000/BoooK/${id}`,{
      headers: { authorization: "Bearer " + token },

     });
     console.log("LLLLLLLLLLLLLLLLLLL");
    if (deleteBook.data === "deleted") {
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
  const result = await axios.post(
    "http://localhost:5000/Favorite",

    { headers: { authorization: `Bearer ${token}` } }
  );
  if (result.status === 201) {
    history.push("/Favorite");
};
}

  return (
    <div className="cards">
                 <input
    id="inputSearch"
    placeholder="search"
    onChange={(e) => {
      searchTarget(e);
    }}
  />
      <button id="searchbtn"
      onClick={() => {
        search1();
      }}
    > بحث </button>
      {Books.map((ele, i) => {
        console.log("nnnnnnnnnnnnn");
        return (
          <div className="card" key={i}>
            <h1>{ele.name}</h1>
            <p>{ele.descripion}</p>
            <img
              src={ele.img}
              onClick={() => {
                gotoBook(ele._id);
              }}
              alr="No img"
            />
            <br/>
            <a href={ele.url} target="_blank">
للقرأة أضغط هنا             </a>
            <br/>
            <BsFillHeartFill
                className="HEART"
            onClick={()=>AddlikBook(ele._id)}
              />
            <button
              onClick={() => {
                deleteBook(ele._id);
              }}
            ><AiTwotoneDelete/>
              حذف
            </button>
 
          </div>
        );
      })}
    </div>
  );
}
