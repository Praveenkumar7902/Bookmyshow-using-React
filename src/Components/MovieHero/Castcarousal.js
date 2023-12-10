import React from "react";
import castSettings from "../../config/component.config";
import HeroSlider from "react-slick";
import castImages from "../../posterImages/castfile";
import CastCrew from "./Cast";
const CastRow = (props) => {
    return(
        <>
       
          <h1 className="py-3 px-6 text-2xl font-bold  text-gray-900">
           Cast
          </h1>
          <HeroSlider {...castSettings}>
            {castImages.map((castpic) => (
              <CastCrew {...castpic}  />
            ))}
          </HeroSlider> 
        
        </>
    )
};
export default CastRow;
