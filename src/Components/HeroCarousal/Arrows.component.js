import React from "react";

export const PrevArrow = (props) =>{
    return(
      //props - {classname,style,onclick}  
     
     <>
     <div
     
     className={props.className}
     style={{ ...props.style, backgroundColor:"black", height:48 , width:52,borderRadius:6,opacity:0.4, }}
     onClick={props.onClick}
     /></>
     
    )
} 


export const NextArrow = (props) =>{
    return(
        <div    
        className={props.className}
        style={{ ...props.style, backgroundColor:"black", height:48 , width:52,borderRadius:6,opacity:0.4, }}
        onClick={props.onClick}
        />  
    
    )
} 