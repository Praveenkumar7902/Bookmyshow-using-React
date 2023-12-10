import React from "react";
import MovieNavbar from "../Components/Navbar/MovieNavbar";
import MovieHero from "../Components/MovieHero/MovieHero.component";
import CastRow from "../Components/MovieHero/Castcarousal";
import CrewRow from "../Components/MovieHero/Crewcarousal";
import { NavBottomMovie } from "../Components/Navbar/navbar.component";
const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      <NavBottomMovie />

      <MovieHero />
      <div className="my-12 container px-4 lg:w-4/6 lg:ml-16">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 text-2xl font-bold">About the Movie</h2>
          <p className="text-lg">
            A cafe owner becomes a local hero but his actions being forth
            consequences from a dangerous world that can shake his carefully
            constructed life.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div>
          <h1 className="text-gray-800 text-2xl  font-bold">
            Applicable Offers
          </h1>
          <div className="flex  gap-3  items-start bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-lg p-2 my-10 w-2/5">
            <img
              className="h-6 w-6 my-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yzP9DplPk6aJqy1gDwT19mnmjAerzapQrn--mNnaBA&s"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-lg font-bold text-gray-800">Filmy Pass</h1>
              <p className="text-gray-600">
                Get RS.75* off on 3 movies you buy/rent on Stream. Buy Film Pass
                @99.
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div>
          <CastRow />
        </div>
        <div className="my-8">
          <hr />
        </div>

        <CrewRow />
      </div>
    </>
  );
};

export default MovieLayout;
