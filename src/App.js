import React  ,{ useState ,useEffect} from "react";
import  {Route} from "react-router-dom"
import Navbar from "./component/Navbar";
import Books from "./component/Books"
import Favorite from "./component/Favorite"
import Login from "./component/Login"
import SignUP from "./component/SignUp"
import Booking from "./component/Booking";
import BookAudio from "./component/BookAudio";
import AddBook from "./component/AddBook";
import UpdetBook from "./component/UpdetBook"
import Book  from "./component/Book"
import About from "./component/About";
import Home from "./component/Home"
function App() { 
  
const [token, setToken] = useState("");
const [isAdmin, setisAdmin] = useState(false);

useEffect(async() => { 
  if (!token) {
    const token = JSON.parse(localStorage.getItem("token"))
    setToken(token)
  }
  // تستخدم لإجراء تحويل على الكائن الناتج قبل إعادته ,JSON.parse 
//localStorage.getItem تستخدم لتخزين قيمة على البراوزر 


if (!isAdmin) {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    setisAdmin(isAdmin) 
}

}, [token])
  return (
    <div className="App">
<Navbar token={token} setToken={setToken}  isAdmin={isAdmin}  setisAdmin={setisAdmin}/>

      <Route
        exact
        path="/Books"
        render={() => {
          return <Books token={token} />;
        }}
      />

<Route
        exact
        path="/About"
        render={() => {
          return <About token={token}  />;
        }}
      />
      <Route
        exact
        path="/Home"
        render={() => {
          return <Home token={token}  />;
        }}
      />

          <Route
        exact
        path="/Book/:id"
        render={() => {
          return <Book token={token}  isAdmin={isAdmin}/>;
        }}
      />
        <Route
        exact
        path="/Booking"
        render={() => {
          return <Booking token={token} />;
        }}
      />
   
      <Route
        exact
        path="/Login"
        render={() => {
          return <Login setToken={setToken}  setisAdmin={setisAdmin}/>
        }}
      />
      <Route exact path="/SignUP" component={SignUP} />
      <Route
        exact
        path="/Favorite"
        render={() => {
          return <Favorite token={token} />;
        }}
      />
    
      <Route
        exact
        path="/AddBook"
        render={() => {
          return <AddBook token={token} />;
        }}
      />
         <Route
        exact
        path="/updetBook/:id"
        render={() => {
          return <UpdetBook token={token} />;
        }}
      />
          <Route
        exact
        path="/AudioBook/:id"
        render={() => {
          return <BookAudio token={token} />;
        }}
      />
    
    
    </div>
  );
}

export default App;
