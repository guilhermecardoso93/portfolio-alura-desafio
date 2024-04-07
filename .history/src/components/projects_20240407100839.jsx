import { projects } from "../projects-array";

export function Projects() {
  const array = [1, 2, 3, 4, 5];
  const stopPosition = 7;

  const projectsRight = projects.slice(0, stopPosition);

  return (
    <div className="w-full flex flex-col gap-10 mt-5 mb-10 px-20">
      <h3 className="text-3xl font-bold flex mt-7  justify-center">
        Experiência profissional
      </h3>
      <div>
        <ul className="flex flex-row justify-center gap-10 items-center flex-wrap">
          {projectsRight.map((project, index) => {
            return (
              <li
                className="flex flex-row justify-between items-center gap-10 "
                key={index}
              >
                <img
                  src={project.img}
                  alt=""
                  className="lg:min-w-[751px] lg:h-[406px] rounded-md sm:min-w-[460px] sm:h-[300px]"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{project.title}</span>
                  <span className="text-sm">{project.descricao}</span>
                  <div className="flex gap-5 mt-3 sm:flex-col lg:flex-row">
                    <button className="w-[116px] h-[51px] text-[#2A7ae4] border-2 border-[#2A7ae4] rounded-sm">
                      <a href={project.repo} target="_blank">
                        Repositório
                      </a>
                    </button>
                    <button className="w-[116px] h-[51px] bg-[#2A7ae4] border-2 text-white rounded-sm">
                      <a href={project.url} target="_blank">
                        Ver Demo
                      </a>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
