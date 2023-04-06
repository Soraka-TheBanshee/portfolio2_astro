import { projects } from "../projects/projects.json";

export default function ProjectsBarHome() {
  return (
    <>
      <div
        className={`mt-5 flex flex-wrap justify-center gap-4 relative `}
      >
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
    </>
  );
}
