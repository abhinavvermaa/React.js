import React from "react";

const Projects = () => {
  return (
    <div className=" flex-col justify-center border-transparent rounded-3xl md:mx-40 mx-4 p-4  m-10" id="projects">
      <div>
        <h1 className="text-4xl font-bold text-gray-100 m-5">PROJECTS</h1>
      </div>
      <div className="flex-wrap md:flex">
        <div className=" flex-wrap items-center m-5 max-w-70  p-4 bg-slate-900/60  border-transparent rounded-3xl">
          <div>
            <img src="./assets/projects/project.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold ">Seamless Shopping Website </h1>
            <p className="text-xl">
            Developed an e-commerce
platform with functionalities like login/signup and add-to-cart.
Designed for intuitive navigation and user experience.
            </p>
          </div>
          
            <div className="flex flex-row flex-wrap"><p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              React
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              Bootstrap CSS
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              Node
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              React-Router
            </p></div>
          
          <div className="flex justify-center">
            <a
              className="m-4 py-1 px-10 bg-gray-300  border rounded-2xl text-black "
              href="https://github.com/abhinavvermaa/React.js/tree/main/projects/Seamless-Shopping"
              target="_blank"
            >
              source code
            </a>
          </div>
        </div>
        <div className="flex-wrap items-center m-5 max-w-70  p-4 bg-slate-900/60  border-transparent rounded-3xl">
          <div>
            <img src="./assets/projects/project.png" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold ">Employee Management System (EMS) </h1>
            <p className="text-xl">
            Developed an Employee Management System using React.js and
            Tailwind CSS. 
            </p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              React
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              Tailwind CSS
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              Context Api
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="m-4 py-1 px-10 bg-gray-300  border rounded-2xl text-black "
              href="https://github.com/abhinavvermaa/React.js/tree/main/major-projects/ems"
              target="_blank"
            >
              source code
            </a>
          </div>
        </div>
        <div className="flex-wrap items-center m-5 max-w-70  p-4 bg-slate-900/60  border-transparent rounded-3xl">
          <div>
            <img src="./assets/projects/project.png" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold ">Currency Converter App</h1>
            <p className="text-xl">
            Created a dynamic app utilizing a
currency API and custom React hooks, featuring an intuitive UI for
real-time currency conversion.
            </p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              React
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              Tailwind CSS
            </p>
            <p className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
              Context-Api
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="m-4 py-1 px-10 bg-gray-300  border rounded-2xl text-black "
              href="https://github.com/abhinavvermaa/React.js/tree/main/React-pro/06currencyconvereter"
              target="_blank"
            >
              source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
