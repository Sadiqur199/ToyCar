import React from "react";
import img1 from "../../../assets/pexels-photo-1319572.jpeg";

const Banner = () => {
  return (
    <div className="mb-9">
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold" data-aos="fade-up">
              <span>Welcome To </span>TinkerToysHaven
            </h1>
            <p className="mb-5">
              Explore a world of excitement and imagination with our wide range
              of car toys! From sleek race cars to rugged off-road vehicles, we
              have the perfect toys to ignite your child's passion for
              adventure.
            </p>
            <button className="btn text-black bg-[#74C4F7] hover:bg-[#74C4F7] border-none">
              Read More..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
