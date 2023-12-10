import React from "react";

const CastCrew = (props) => {
  return (
    <>
      <div className="rounded-full gap-3  w-32 h-32">
        <img className="rounded-full" src={props.cimage} alt={props.ctitle} />
      </div>
      <h1 className="text-xl text-gray-900 mr-2  ">{props.ctitle}</h1>
      <p className="text-lg text-gray-600">{props.csubtitle}</p>
    </>
  );
};

export default CastCrew;
