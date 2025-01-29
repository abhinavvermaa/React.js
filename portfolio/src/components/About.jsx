import React from "react";

const About = () => {
  return (
    <div className="" id="about">
      <div className="flex flex-wrap-reverse mt-10 ">
        <div className="md:m-30 m-10  flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold color mb-4 text-gray-200 ">
            Hi ,I am Abhinav verma
          </h1>
          <p className="flex-wrap text-xl font-semibold m-2 text-gray-100 ">
            I'm a BCA student and an aspiring full-stack developer skilled in
            React and JavaScript.{" "}
          </p>
          <div className="flex items-center justify-center">
            <button className="item bg-blue-400 text-xl m-2 border-transparent rounded-2xl cursor-pointer">
              <a href="#projects" className="m-3 text-3xl">Contact me</a>
            </button>
          </div>
        </div>
        <div className="border-transparent rounded-full overflow-auto  m-auto flex items-center justify-center  ">
          <img
            className="h-70"
            src="https://media.licdn.com/dms/image/v2/D5603AQHhsYbG26WWrQ/profile-displayphoto-shrink_800_800/B56ZSDCJpeHsAg-/0/1737365199672?e=1743638400&v=beta&t=KZ0yFkX0JR5UpiQCx8Hyceg7oOo-iisbBSpiIMpK7Cc"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default About;
