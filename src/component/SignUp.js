import axios from "axios";
//الاكسيوز لجلب البيانات من الباك اند
import React, { useState } from "react";
//يوز ستيت اسخدمها علشان اخزن قيم للمتغيرات
import { useHistory } from "react-router";
//يوز هيستوري استخدمها للتنقل بين الصفحات بعد تحقق شرط معين
import "./Login.css"
export default function SinUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const AddUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/SignUp`, {
      name,
      email,
      pass,
    });
    console.log(res.data);
    //اعرف متغير يسوي أضافة يجيب البيانات من الباك اند
    if (res.status === 201) {
      history.push("/logIn");
      //أذاكان الادخال صحيح انتقل لل لوق ان
    }
  };
  return (
    <div className="loginbox">
      <h1>تسجيل جديد</h1>
      <input
        onChange={(e) => {
          changeName(e);
        }}
        type="text"
        placeholder="name"
      />
      <br />
      <br />

      <input
        onChange={(e) => {
          changeEmail(e);
        }}
        type="text"
        placeholder="email"
      />
      <br />
      <br />

      <input
        onChange={(e) => {
          changePass(e);
        }}
        type="pass"
        placeholder="pass"
      />
      <br />
      <br />

      <button
        onClick={() => {
          AddUser();
        }}
      >
        تسجيل دخول
      </button>
    </div>
  );
}
