import React,{useState ,useEffect} from "react";
import { useParams } from "react-router-dom";


export default function BooK({token}) {
  const [Boook, setBoook] = useState([]);
  const {id} = useParams()
  // const [input, setInput] = useState('');
  useEffect(async () => {
    const res = await axios.get(`http://localhost:3000/Book/${id}`,{
        headers: { authorization: "Bearer " + token }
    });
  console.log(res.data);
  setBoook(res.data);
          }, []);


  return (

    <div>
 <div>
      <p>{Boook.name}</p>
      <p>{Boook.descripion}</p>
      <img src={Boook.url} alr=" NO img" />
      <input onChange={(e)=>{changeComment(e)}} type="text" />
      <button onClick={()=>{addComment()}}>add comment</button>
        </div>
        </div>  
    
  )
} 
  
