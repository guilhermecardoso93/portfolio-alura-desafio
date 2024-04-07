import cna from "../assets/cna.jpg";
import oracle from "../assets/oracle.png";
import rocket from "../assets/rocket.png";

export function Education() {
  return (
    <div className="w-full flex flex-col gap-10 py-10 bg-[#EAF2FD] px-20">
      <h3 className="text-3xl font-bold flex mt-7  justify-center">
        Formação acadêmica
      </h3>
      <div className="flex flex-row justify-center gap-10 items-center flex-wrap">
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-sm h-[286px] w-[368px] flex items-center justify-center">
            <img
              src={oracle}
              alt=""
              className="w-[292px] h-[170px] p-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">Front-End</span>
            <span>2024- Alura | Oracle</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-sm h-[286px] w-[368px] flex items-center justify-center">
            <img
              src={rocket}
              alt=""
              className="w-[292px] h-[170px] p-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">ReactJS - React Native</span>
            <span>2024- Alura | Oracle</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-sm h-[286px] w-[368px] flex items-center justify-center">
            <img
              src={cna}
              alt=""
              className="w-[292px] h-[170px] p-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">Inglês</span>
            <span className="text-sm">2009 | 2013 - CNA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
