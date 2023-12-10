import React from "react";
import Navbar, { NavBottom } from "../Components/Navbar/navbar.component";
import { HeroCarousal, EntertainmentCardSlider,Premier, WorldcupFunction, AppFunction, DarkPremier } from "../Components/HeroCarousal/herocarousal.component";

const DefaultLayout = (props) => {

    return(
        <>
            <Navbar/>
            <NavBottom/>
        <HeroCarousal />
        <WorldcupFunction/>
        <Premier/>
        <EntertainmentCardSlider/>
        <AppFunction/>
        <DarkPremier/>
        
       
       
        </>
    )
};


export default DefaultLayout;
