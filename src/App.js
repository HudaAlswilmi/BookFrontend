import "./App.css";
import React  ,{ useState ,useEffect} from "react";
import  {Route} from "react-router-dom"
import Navbar from "./component/Navbar";
import Books from "./component/Books"
import Favorite from "./component/Favorite"
import Login from "./component/Login"
import SignUP from "./component/SignUp"
import Booking from "./component/Booking";
import Home from "./component/Home";
import BookAudio from "./component/BookAudio";
import AddBook from "./component/AddBook";
import UpdetBook from "./component/UpdetBook"
import Book  from "./component/Book"
import FavoriteAudio from "./component/FavoriteAudio"
function App() { 
  
const [token, setToken] = useState("");
const [isAdmin, setisAdmin] = useState(false);

useEffect(async() => { 
  if (!token) {
    const token = JSON.parse(localStorage.getItem("token"))
    setToken(token)
  }
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
        path="/FavoriteAudio"
        render={() => {
          return <FavoriteAudio token={token} />;
        }}
      />
      <Route
        exact
        path="/addBook"
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
       <Route
        exact
        path="/Home"
        render={() => {
          return <Home token={token} />;
        }}
        />
    </div>
  );
}

export default App;
