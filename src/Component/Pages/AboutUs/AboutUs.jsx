import React from "react";
import img1 from "../../../assets/pexels-photo-1319572.jpeg";
import ResponsiveEmbed from "react-responsive-embed";

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
      <h1 className="mt-5 text-center  text-4xl font-bold mb-[30px]">
        About Us
      </h1>
      <div className="md:flex justify-between  p-[50px] rounded " data-aos="fade-right">
        <div className="shadow-lg w-[50%]">
          <img
            className="rounded py-5 pl-5 pt-5 "
            src="https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="shadow-lg py-5 pr-5 w-[50%]">
          <h1 className=" ml-[100px] text-2xl font-bold mb-8 mt-[20px]">
            Our Mission
          </h1>
          <ul className="ml-[100px] pt-[30px] text-justify">
            <li className="mb-1"> <span className="font-bold">1. </span>Delivering unparalleled customer service</li>
            <li className="mb-1"><span className="font-bold">2. </span>Creating innovative and sustainable solutions.</li>
            <li><span className="font-bold">3. </span>
              Building long-lasting relationships with our clients, partners,
              and community.
            </li>
          </ul>
        </div>
      </div>
      {/* our vision */}
      <div className="md:flex justify-between  p-[50px] rounded " data-aos="fade-left">
        <div className="shadow-lg py-5 pr-5 w-[50%]">
          <h1 className=" mx-[100px] text-2xl font-bold mb-8 mt-[20px]">
            Our Vision
          </h1>
          <ul className="mx-[100px] pt-[30px] text-justify">
            <p>
              We envision a future where [insert vision statement]. Our goal is
              to be a leader in our industry, known for our commitment to
              quality, integrity, and positive impact.
            </p>
          </ul>
        </div>
        <div className="shadow-lg w-[50%]">
          <img
            className="rounded py-5 pl-5 pt-5 "
            src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      {/* Our Values */}
      <div className="md:flex justify-between  p-[50px] rounded " data-aos="fade-right">
        <div className="shadow-lg w-[50%]">
          <img
            className="rounded py-5 pl-5 pt-5 "
            src="https://plus.unsplash.com/premium_photo-1679429320552-ec9038ccd550?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="shadow-lg py-5 pr-5 w-[50%]">
          <h1 className=" ml-[100px] text-2xl font-bold mb-8 mt-[20px]">
          Our Values
          </h1>
          <ul className="ml-[100px] pt-[30px] text-justify">
            <li className="mb-1"> <span className="font-bold">Customer Focus:</span> Our customers are at the heart of everything we do. We listen, understand, and go above and beyond to meet their needs.</li>
            
            <li className="mb-1"> <span className="font-bold">Innovation:</span> We embrace change and continuously seek new ways to improve and innovate.</li>
            
            <li className="mb-1"> <span className="font-bold">Integrity: </span> We act with honesty and integrity in all our interactions.</li>
            <li className="mb-1"> <span className="font-bold">Sustainability: </span> We are dedicated to sustainable practices that protect our planet for future generations.</li>
            <li> <span className="font-bold">Teamwork: </span> We believe in the power of collaboration and working together to achieve our common goals.</li>
            
          </ul>
        </div>
      </div>

      {/* Youtube */}
      <div>
        <h1 className="mt-[50px] text-center  text-4xl font-bold mb-[40px]">
          Thinker Toy Haven Introduce
        </h1>
        <div
          style={{
            position: "relative",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            paddingBottom: "35.25%",
          }}
        >
          <iframe
            width="93%"
            height="500"
            className="mx-auto shadow-lg"
            src="https://www.youtube.com/embed/wMWcBIAHOHY?si=VXLjDFMTXC6v-3GN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
