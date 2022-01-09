import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
export default function Home() {
    return (
        <>
           <div className="welcomeBackground">
        {/* // navbar  */}
           <div className='nav-container  py-4' >
                <div  className='shadow-lg p-1 border border-2 rounded-circle border-danger mt-2'>
                    {/* <img width="50px" height="50px" src={"https://images.pexels.com/photos/5430205/pexels-photo-5430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" /> */}
                </div>
            {}
        </div>
        {/* end navbar */}
                <div className="welcomeTitle text-light col-md-5">
                    <h1>أهلا وسهلا بكم </h1>
                    <h1>مكتبة أبجد للكتب المسموعه و المقروءه </h1>
                    <h2>أسمع وأقراء كتاب وأفتح لعقلك ألف باب</h2>

                </div>
              
            </div>
        </>
    )
}