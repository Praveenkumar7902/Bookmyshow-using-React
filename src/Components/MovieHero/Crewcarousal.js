import React from "react";
import castSettings from "../../config/component.config";
import HeroSlider from "react-slick";
import crewImages from "../../posterImages/crewfile";
import Crew from "./crew";
const CrewRow = (props) => {
    return(
        <>
       
          <h1 className="py-3 px-6 text-2xl font-bold   text-gray-900">
           Crew
          </h1>
          <HeroSlider {...castSettings}>
            {crewImages.map((crewpic) => (
              <Crew {...crewpic}  />
            ))}
          </HeroSlider> 
        
        </>
    )
};
export default CrewRow;
