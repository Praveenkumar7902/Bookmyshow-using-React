import { Poster } from "../herocarousal.component";
import settingsdark from "../../../config/component.config";
import Slider from "react-slick";

const PosterSlider = (props) => {
    return(
        <>
         
  
          <h1 className={` px-6 text-2xl font-bold ${props.isDark ? "text-white" :"text-gray-800"}`}>{props.title}</h1>
          <p className={`px-6 text-xl font-normal  ${props.isDark ? "text-white" :"text-gray-800"} `}>{props.subtitle}</p>
          <Slider {...settingsdark}>
            {props.images.map((premierdarkimage) => (
              <Poster {...premierdarkimage} isDark={props.isDark} />
            ))}
          </Slider>
       
      </>
    )
}

export default PosterSlider ;