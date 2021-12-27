import "./App.css";
import React  ,{ useState } from "react";
import Navbar from "./component/Navbar";
import Books from "./component/Books"
import Favorite from "./component/Favorite"
import Login from "./component/Login"
import SignUP from "./component/SignUp"
import  {Route} from "react-router-dom";
import Booking from "./component/Booking";
import Home from "./component/Home";
import AddBook from "./component/AddBook";
import Book  from "./component/Book"
function App() {
const [token, setToken] = useState("");

  return (
    <div className="App">
<Navbar token={token} setToken={setToken} />

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
          return <Book token={token} />;
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
          return <Login setToken={setToken} />;
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
        path="/addBook"
        render={() => {
          return <AddBook token={token} />;
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
