import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";
//axios
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import HomePage from "./pages/home.page";

import DefaultLayout from "./Layouts/default.layout";
import MovieLayout from "./Layouts/movie.layout";
import Sports from "./Layouts/SportsLayout";


//axios
axios.defaults.baseURL="https://api.themoviedb.org/3/";
axios.defaults.params={};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY ;



function App() {
  return (
    <div>
      <DefaultHOC path="/" exact Component={DefaultLayout} />
      <MovieHOC path="/movies/:id" exact Component={MovieLayout} />
      <DefaultHOC path="/sports" exact Component={Sports} />
    </div>
  );
}

export default App;
