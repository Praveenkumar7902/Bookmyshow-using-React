import React from "react";
import { Poster } from "../Components/HeroCarousal/herocarousal.component";
import Navbar, { NavBottomSports } from "../Components/Navbar/navbar.component";
import PlayFilter from "../Components/playsFilter/PlaysFilter";
import Venue from "../Components/playsFilter/venue";
const Sports = () => {
    return(
        <>
        <Navbar/>
        <NavBottomSports/>
        <div className="bg-gray-100">
       < img  className="w-full h-96 md:80  py-4 px-2" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1698917009198_chennaiyindesktop.jpg" alt="sport page"/>
        <div className="container mx-auto px-12">
            


            <div className="w-full lg:flex lg:flex-row-reverse py-12">
           <div className="w-2/3">
           <h1  className="text-gray-800 text-2xl font-bold ">Sports In Chennai</h1>
           <div className="text-red-600  py-4 ">
                 <button className="mr-2 text-base rounded-full bg-white border-2 px-3 py-1">Football</button>
                 <button className="mr-2 text-base rounded-full bg-white border-2 px-3 py-1">Online Games</button>
                 <button className="mr-2 text-base rounded-full bg-white border-2 px-3 py-1">E-Sports</button>
                 <button className="mr-2 text-base  rounded-full bg-white border-2 px-3 py-1">Cricket</button>
                 <button className="mr-2  text-base  rounded-full bg-white border-2 px-3 py-1">Kabaddi</button>
                 <button className="mr-2  text-base  rounded-full bg-white border-2 px-3 py-1">Running</button>
                 <button className="mr-2  text-base  rounded-full bg-white border-2 px-3 py-1">Chess</button>
                 <button className="mr-2  text-base  rounded-full bg-white border-2 px-3 py-1">Sudoku</button>
             
             
               
                </div>
                
            <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 my-3">
               
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyOCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375235-guunzuxdwe-portrait.jpg"
            title="India vs Australia - 3rd T20I"
            subtitle="T20  ₹500 Onwards"
            />
            </div>
            <div className="w-1/2 md:w-1/3 my-3  ">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00311494-mqkeaupfnf-portrait.jpg"
            title="Online Game - Lost Treasure of ..."
            subtitle="E-Sports  ₹199"
            />
            </div>
            <div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00339877-aawrawcwqj-portrait.jpg"
             title="Samurai Sudoku Championship"
            subtitle="Online Games  ₹149"
            />
            </div>
            <div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00354868-amatwcwlyf-portrait.jpg"
            title="All India Blitz Chess Championship"
            subtitle="Chess ₹149"
            />
            </div>
            <div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00337798-edvrsrujmu-portrait.jpg"
            title="Monthly Sudoku Challenge by MALSAR"
            subtitle="Online Games  ₹79"
            />
            </div>
            <div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxIEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00343705-nmjfmywpzk-portrait.jpg"
            title="21 Days Walking Challenge"
            subtitle="Online Sports  ₹99"
            />
            </div><div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00311499-dtdgccatus-portrait.jpg"
            title="Mission Black Terror"
            subtitle="Online Games  ₹199"
            />
            </div><div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00376317-urymnaewlu-portrait.jpg"
            title="Pro Kabaddi League Season 10 -Bengaluru Bulls"
            subtitle="Kabaddi  ₹200 Onwards"
            />
            </div>
            <div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00369062-ulkvsexgan-portrait.jpg"
             title="Mumbai City FC 2023-24"
            subtitle="Football  ₹199 Onwards"
            />
            </div>

            <div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00370015-uewjdsjvbk-portrait.jpg"
            title="ISL Season 2023-24 CHENNAYIN FC"
            subtitle="Football  ₹150 Onwards"
            />
            </div><div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370001-btqhwpywww-portrait.jpg"
             title="Chennayin FC VS East Bengal FC "
            subtitle="Football  ₹150 Onwards"
            />
            </div><div className="w-1/2 md:w-1/3 my-3">
            <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAxMyBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370002-fvjvjyfjpn-portrait.jpg"
             title="Chennayin FC VS Bengaluru FC"
            subtitle="Football  ₹150 Onwards"
            />
            </div>
           
            
            </div>
           </div>
            <div className="lg:w-1/3">
            <p className="text-gray-800 text-2xl  font-bold ">Filters</p>
            <PlayFilter title="Date" tags={["Today" , "Tomorrow" , "This Weekend"]}/>
            <PlayFilter title="Categories" tags={["Football","Online Games","E Sports", "Kabaddi", "Cricket" ,"Running" ,"Chess","Online Sports"]}/>
            <PlayFilter title="More Filters" tags={["Outdoor Events","Online Streaming" , "Fast Filling" , "Kids Allowed"]}/>
            <PlayFilter title="Price" tags={["Free" , "0-500" , "500-2000","Above 2000"]}/>
            <Venue/>
           
            </div>
            </div>
        </div></div>
        </>
    )
}

export default Sports;