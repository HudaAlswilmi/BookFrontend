import React from "react";
import { Link } from "react-router-dom";
import {FaUserCheck} from "react-icons/fa"
import {FaUserEdit} from "react-icons/fa"
import {MdAddBox}from "react-icons/md"
import { BsFillHeartFill } from "react-icons/bs";
import {FaAudioDescription} from "react-icons/fa"
import {FaBookOpen} from "react-icons/fa"
import {HiOutlineReply} from "react-icons/hi"
import "./Nav.css";
export default function Navbar({ token, setToken ,setisAdmin,isAdmin}) {

  const logout =  ()=>{
    setToken(""); localStorage.setItem("token", JSON.stringify(""));
    setisAdmin(""); localStorage.setItem("isAdmin",JSON.stringify(""));
  //stringify تقوم ب أستبدال القيمه الى قيمه أخرى 
  }
  return (
    <div id="navbar">
      <nav >
      {token ? (
        <ul >
          
            <Link
           onClick={() => {  logout(); }}
              to="/logIn"
            >
              تسجيل الخروج <HiOutlineReply/>
            </Link>
          
            <Link to="/About">المؤلفين</Link>


                
          {!isAdmin == true ? <>
            <Link to="/Favorite">
              <BsFillHeartFill /> كُتبي
            </Link>
          </> :""}
           


          {isAdmin == true ? <>
            <Link to="/addBook">
              أضافة كتاب  <MdAddBox/>
            </Link>
          </> :""}
        
          {/* <li>
            <Link to="/updetBook">
              تعديل كتاب  
            </Link>
          </li> */}
          
            <Link to="/Books">الكتب الصوتيه <FaAudioDescription/> </Link>
            <Link to="/Booking">الكتب المقروءه <FaBookOpen/> </Link>
            
            <Link to="/Home">الرئيسيه</Link>

          
         
        </ul>
      ) : (
        <ul>
            <Link to="/logIn">تسجيل الدخول <FaUserCheck/> </Link>
            <Link to="/SignUp">تسجيل جديد <FaUserEdit/> </Link>
            
          
        </ul>
      )}
      </nav>
    </div>
  );
}
