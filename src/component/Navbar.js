import React from "react";
import { Link } from "react-router-dom";
import {BsStar} from "react-icons/bs";
export default function Navbar ({ token, setToken }){
return (
<div>
{token ? (
        <ul>
          <li>
            <Link to="/Favorite">
              <BsStar />
            </Link>
          </li>
          <li>
            <Link to="/Books">الرئيسية</Link>
          </li>
          <li>
            <Link to="/BooK">كٌتبي </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setToken("");
              }}
              to="/logIn"
            >  تسجيل الخروج  </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/logIn">تسجيل الدخول </Link>
          </li>
          <li>
            <Link to="/SinUp">تسجيل جديد </Link>
          </li>
        </ul>
      )}
</div>
)}