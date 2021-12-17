import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";


export default function LogIn({ setToken }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const logIn = async () => {
    try {
      const res = await axios.post("http://localhost:5000/logIn", {
        email,
        pass,
      });
      setToken(res.data.token);
      console.log(res.data.token);
      // بعد ما اتاكد ان التسجيل صحيح 
//يجيب بيانات اللوق ان 
//اسوي تسجيل دخول 
      history.push("/BooK");
      //أذا كان صحيح ينتقل للصفحه البوك 
    } catch (err) {
      console.log("errrror");
    }
  };
  return (
    <div className="loginbox">
      <h1> LOGIN </h1>
      <input
        onChange={(e) => {
          changeEmail(e);
        }}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          changePass(e);
        }}
        type="password"
        placeholder="pass"
      />
      <button
        onClick={() => {
          logIn();
        }}
      >
        logIn
      </button>
    </div>
  );
}
