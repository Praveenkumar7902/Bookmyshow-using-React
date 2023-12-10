import React from "react";

const Crew = (props) => {
  return (
    <>
      <div className="rounded-full gap-3  w-32 h-32">
        <img className="rounded-full" src={props.crimg} alt={props.crtitle} />
      </div>
      <h1 className="text-xl text-gray-900 mr-2  ">{props.crtitle}</h1>
      <p className="text-lg text-gray-600">{props.crsubtitle}</p>
    </>
  );
};

export default Crew;
