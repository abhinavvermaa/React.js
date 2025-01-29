import React from "react";
import data from "./ProjectData.json";

const Projects = () => {
  return (
    <div
      className=" flex-col justify-center border-transparent rounded-3xl md:mx-40 mx-4 p-4  m-10"
      id="projects"
    >
      <div>
        <h1 className="text-4xl font-bold text-gray-100 m-5">PROJECTS</h1>
      </div>
      <div className="flex-wrap md:flex">
        {data.map((project, i) => (
          <div
            key={i}
            className=" flex-wrap items-center m-5 max-w-70  p-4 bg-slate-900/60  border-transparent rounded-3xl"
          >
            <div>
              <img src="./assets/projects/project.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold ">
                {project.title}
              </h1>
              <p className="text-xl">
                {project.description}
              </p>

              <div className="flex flex-row flex-wrap">
                {project.technologies.map((tech,i)=>(
                <p key={i} className="m-3 px-3 border-transparent rounded-2xl bg-blue-400 text-black">
                  {tech}
                </p>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  className="m-4 py-1 px-10 bg-gray-300  border rounded-2xl text-black "
                href={project.sourceCode}
                  target="_blank"
                >
                  source code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
