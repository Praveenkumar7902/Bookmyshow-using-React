// TRANSFORM ONE COMPONENT TO ANOTHER COMPONENT - like AJAX METHEDOLOGY
// ADDING ADDITIONAL FUNCTIONALITIES TO THE EXISTING COMPONENTS
import React from "react";
import { Route , Routes, Router} from "react-router-dom";

//layout
import MovieLayout from "../Layouts/movie.layout";

const MovieHOC = ({component:Component, ...rest }) => {

    //element->
    //props -> exact,path 
    return (
        
        <Routes>
    <Route
    {...rest}
    component ={ (props) =>(
        <MovieLayout>
        <Component{...props}/>
        </MovieLayout>
        
    )
    }
    />
</Routes>


    )
}

    


export default MovieHOC;