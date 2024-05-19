import React from "react";
import img1 from "../../../assets/pexels-photo-1319572.jpeg";

const AboutUs = () => {
  return (
    <div>
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
      {/* about us */}
      <h1 className="mt-5 text-center  text-4xl font-bold mb-[30px]">About Us</h1>
      <div className="md:flex justify-between p-[50px] rounded ">
        <div className="shadow-lg">
          <img className="rounded py-5 pl-5 pt-5 " src="https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="shadow-lg py-5 pr-5">
          <h1 className=" text-center  text-2xl font-bold mb-8 mt-[20px]">Thinker Toy Haven</h1>
          <p className="ml-[30px] pt-[30px] text-justify">We provide you with an extensive selection of sets, tiny figures, and accessories since we are fervent fans of Thinker Toys Haven toys. With years of expertise, we strive to offer the widest range of Thinker Toys Haven items to delight fans of the brand at all age levels. We have something for everyone, regardless of experience level—from novice builders to seasoned collectors. Visit our website to get started creating your own Thinker Toys Haven right now!</p>
        </div>
      </div>
      {/* Youtube */}
      <div>
        <h1 className="mt-5 text-center  text-4xl font-bold mb-[30px]">Thinker Toy Haven Introduce</h1>
      </div>
    </div>
  );
};

export default AboutUs;
