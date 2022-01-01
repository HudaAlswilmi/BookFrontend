import React from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import "./Nav.css";
export default function Navbar({ token, setToken ,setisAdmin,isAdmin}) {

  const logout =  ()=>{
    setToken(""); localStorage.setItem("token", JSON.stringify(""));
    setisAdmin(""); localStorage.setItem("isAdmin",JSON.stringify(""));
  //stringify تقوم ب أستبدال القيمه الى قيمه أخرى 
  }
  return (
    <div>
      <nav>
      {token ? (
        <ul>
          <li>
            <Link
           onClick={() => {  logout(); }}
              to="/logIn"
            >
              تسجيل الخروج
            </Link>
          </li>
          <li>
            <Link to="/Favorite">
              <BsFillHeartFill /> كُتبي
            </Link>
          </li>

          {isAdmin == true ? <>
            <li>
            <Link to="/addBook">
              أضافة كتاب  
            </Link>
          </li>
          </> :""}
        
          {/* <li>
            <Link to="/updetBook">
              تعديل كتاب  
            </Link>
          </li> */}
          
          <li>
            <Link to="/Books">الكتب الصوتيه </Link>
          </li>
          <li>
            <Link to="/Booking">الكتب المقروءه </Link>
          </li>
         
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/logIn">تسجيل الدخول </Link>
          </li>
          <li>
            <Link to="/SignUp">تسجيل جديد </Link>
          </li> 
          <li>
            <Link to="/Home">الرئيسية </Link>
          </li>
          
        </ul>
      )}
      </nav>
    </div>
  );
}
