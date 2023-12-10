// TRANSFORM ONE COMPONENT TO ANOTHER COMPONENT - like AJAX METHEDOLOGY
// ADDING ADDITIONAL FUNCTIONALITIES TO THE EXISTING COMPONENTS
import React from "react";
import { Route , Routes, Router} from "react-router-dom";

//layout
import DefaultLayout from "../Layouts/default.layout";

const DefaultHOC = ({component:Component, ...rest }) => {

    //element->
    //props -> exact,path 
    return (
        
        <Routes>
    <Route
    {...rest}
    component ={ (props) =>(
        <>
        <DefaultLayout>
        <Component{...props}/>
        </DefaultLayout>
        </>
    )
    }
    />
</Routes>


    )
}

    


export default DefaultHOC;