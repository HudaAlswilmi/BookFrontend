import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

export default function LogIn({ setToken, setisAdmin }) {
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
      if (res.data.payload.isAdmin == true) {
        setToken(res.data.token);
        console.log("token", res.data.token);
        localStorage.setItem("token", JSON.stringify(res.data.token));
// اذا كانت قيمة الادمن صحيحه  يغير قيمة التوكن 
// في اللوكل ستورج  يثبت قيمة التوكن 
//JSON.stringify تستخدم في استبدال قيمة 
        setisAdmin(res.data.payload.isAdmin);
        console.log("isAdmin", res.data.payload.isAdmin);
        localStorage.setItem(
          "isAdmin",
          JSON.stringify(res.data.payload.isAdmin)
        );
        history.push("/Home");
      } else if (res.data.payload.isAdmin == false) {
        setToken(res.data.token);
        console.log("token", res.data.token);
        localStorage.setItem("token", JSON.stringify(res.data.token));

        setisAdmin(res.data.payload.isAdmin);
        console.log("isAdmin", res.data.payload.isAdmin);
        localStorage.setItem(
          "isAdmin",
          JSON.stringify(res.data.payload.isAdmin)
        );
        history.push("/Home");
      }
    } catch (err) {
      console.log("errrror");
    }
  };
  return (
    <div className="loginbox">
      <img
        src="data:image/jpeg;base64,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"
        className="imgdiv"
      />
      <h1> تسجيل الدخول </h1>
      <form>
        <p>أسم المستخدم </p>
        <input
          onChange={(e) => {
            changeEmail(e);
          }}
          type="text"
          placeholder="email"
        />
        <p>كلمة المرور </p>
        <input
          onChange={(e) => {
            changePass(e);
          }}
          type="password"
          placeholder="pass"
        />
      </form>
      <br />
      <button className="logbut"
        onClick={() => {
          logIn();
        }}
      >
        دخول
      </button>
    </div>
  );
}
