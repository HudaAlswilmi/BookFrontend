import React from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import "./Nav.css";
export default function Navbar({ token, setToken }) {
  return (
    <div>
      {token ? (
        <ul>
          <li>
            <Link
              onClick={() => {
                setToken("");
              }}
              to="/logIn"
            >
              {" "}
              تسجيل الخروج{" "}
            </Link>
          </li>
          <li>
            <Link to="/Favorite">
              <BsFillHeartFill /> كُتبي
            </Link>
          </li>
          <li>
            <Link to="/addBook">
              أضافة كتاب  
            </Link>
          </li>
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
    </div>
  );
}
