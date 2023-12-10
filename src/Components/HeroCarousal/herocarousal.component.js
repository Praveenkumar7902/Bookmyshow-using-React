import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";
import Slider from "react-slick";
import Worldcuplabel from "react-slick";
import Labeltag from "react-slick";

//axios
import axios from "axios";

//CONFIG
import settings from "../../config/component.config";
import settingsLg from "../../config/settingsLg";
import settingshero from "../../config/settingshero";
import settingsentertainment from "../../config/settingsentertainment";
import Posterslider from "./PosterSlider/posterslider.component";
import OutdoorEvents from "../../posterImages/outdoor_events";
//component
import PremierImages from "../../posterImages/premierimages";
import DarkPremierImages from "../../posterImages/Darkpremier";
import EntertainmentImages from "../../posterImages/entertainmentimages";
import images from "../../posterImages/HeroCarousal";

import castImages from "../../posterImages/castfile";
import Online_Streaming_Events from "../../posterImages/onlineStreamingEvents";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroCarousal = () => {
//  const [Images ,setImages] = useState([]);

//  useEffect(()=>{
//   const requestNowPlayingMovies = async() =>{
//     const getImages = await axios.get("/movie/now_playing");
//     console.log (getImages);
//   };
//   requestNowPlayingMovies();
//  },[])


  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settingshero}>
          {images.map((image) => (
            <div className="w-full h-52 md:80  py-4">
              <img src={image} alt="carousal image" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-68 p-4 py-6">
              <img src={image} alt="carousal image" className="w-full h-fu" />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-132 h-100  px-10 ">
        <img
          className="w-full h-full rounded-xl"
          src={props.src}
          alt="Entertainment logo"
        />
      </div>
    </>
  );
};

export const EntertainmentCardSlider = () => {
  return (
    <>
      <div className="mx-auto px-12 py-2">
        <h1 className="text-2xl font-bold text-gray-800">
          The Best Of Live Events
        </h1>
      </div>
      <Slider {...settingsentertainment}>
        {EntertainmentImages.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </>
  );
};
const Worldcup = (props) => {
  return (
    <div className="px-7 py-3">
      <div className="h-28 w-full">
        <img className="rounded-lg" src={props.src} alt="worldcup2023" />
      </div>
    </div>
  );
};
export const WorldcupFunction = (...props) => {
  const label = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png",
    },
  ];
  return (
    <>
      <Worldcuplabel>
        {label.map((img) => (
          <Worldcup {...img} />
        ))}
      </Worldcuplabel>
    </>
  );
};

 export const Poster = (props) => {
  return (
    <>
      <div className="py-3 px-7 ">
        <div className="  h-140 w-60  ">
          <img className=" rounded-lg " src={props.src} alt={props.title} />
        </div>
        <h3
          className={`text-lg font-bold px-2 ${
            props.isDark ? " text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm font-lg px-2 ${
            props.isDark ? " text-white" : "text-gray-700"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};
export const Premier = (...props) => {
  return (
    <>
      <div>
        <div>
          <h1 className="py-3 px-6 text-2xl font-bold  text-gray-700">
            Recommended Movies
          </h1>
          <Slider {...settings}>
            {PremierImages.map((movieimage) => (
              <Poster {...movieimage}  />
            ))}
          </Slider> 

        </div>
      </div>
    </>
  );
};

const AppLabel = (props) => {
  return (
    <div className="px-7 py-10">
      <div className="h-28 w-full">
        <img className="rounded-lg" src={props.src} alt="worldcup2023" />
      </div>
    </div>
  );
};
export const AppFunction = (...props) => {
  const label = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png",
    },
  ];
  return (
    <>
      <Labeltag>
        {label.map((img) => (
          <AppLabel {...img} />
        ))}
      </Labeltag>
    </>
  );
};

export const DarkPremier = (...props) => {
  return (
    <>
      <div className="bg-navcol-700">
        <div className="flex px-6">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="premier logo"
            className="w-full h-full"
          />
        </div>
        <Posterslider images={DarkPremierImages} title="Premieres" subtitle="Brand New Releases Every Friday" isDark/>
      </div>
      
    <div>
   <Posterslider
    images={Online_Streaming_Events} 
    title="Online Streaming Events"
    isDark={false} />
  </div>
  <div>
   <Posterslider
    images={OutdoorEvents} 
    title="Outdoor Events"
    isDark={false} />
  </div>
    </>
  );
};
