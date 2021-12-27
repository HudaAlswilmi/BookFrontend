import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Book({token}) {
  const [Book, setBook] = useState([])
  const {id} = useParams()

  useEffect(async () => {
         const res = await axios.get(`http://localhost:5000/Book/${id}`,{
            headers: { authorization: "Bearer " + token }
        });
    console.log("iddddd",id);
    setBook(res.data);
    console.log(res.data,"dooooon");
  }, []);
  return (
    <div>  
        <h1>{Book.name}</h1>
    <p>{Book.descripion}</p>
    <img
      src={Book.img}
    
      alr="No img"
    />
    <br/>
    <a href={Book.url} target="_blank">
للقرأة أضغط هنا             </a>
    <br/>
   {/* <p>{Book.name}</p>
      <p>{Book.descripion}</p>
      <img src={Book.url} alr=" NO img" /> */}
    </div>
  )}
