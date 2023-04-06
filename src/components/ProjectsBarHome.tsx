import { useState } from "react";
import { projects } from "../projects/projects.json";
import "./mask-helper.css";

export default function ProjectsBarHome() {
  const [showProjects, setShowProjects] = useState(false)

  const showProjectsOnClick = () => {
    setShowProjects(prev => !prev)
  }

  return (
    <>
      <div className="group/container relative" >
          <span className={`inline-block absolute bottom-3 right-3 text-slate-300 opacity-30 group-hover/container:opacity-80 transition-opacity duration-500 ${showProjects&&'hidden'} `}  >See more...</span>
        <div className={`${!showProjects?'mask':'remove-mask'} max-h-[850px] md:max-h-[575px] mt-5 overflow-hidden flex flex-wrap justify-center gap-4 relative `}>
          <div onClick={showProjectsOnClick} className={` absolute top-0 right-0 z-10 w-full h-full ${showProjects&&'hidden'} `} >
          </div>
          {projects?.map((project) => {
            return (
              <div key={project.id} className="p-5 relative group/project">
                {/* background div */}
                <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gray-200 opacity-20 shadow-[5px_5px_10px_-5px_rgba(255,255,255,1)] group-hover/project:shadow-none "></div>
                {/* background div */}
                <a href={`/projects/project${project.id}`}>
                  <div className="w-[300px] h-[180px] overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={project.img}
                      alt={project.title}
                    />
                  </div>
                  <h4 className="text-lg font-medium">{project.title}</h4>
                  <p className="opacity-80 flex justify-end gap-2">
                    {project.techs.map((tech) => (
                      <span>{`#${tech}`}</span>
                    ))}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
