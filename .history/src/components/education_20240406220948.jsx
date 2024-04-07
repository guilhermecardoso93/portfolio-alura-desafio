import cna from "../assets/cna.jpg";
import oracle from "../assets/oracle.png";
import rocket from "../assets/rocket.png";

export function Education() {
  return (
    <div className="flex flex-col gap-10 mt-5 w-full bg-[#EAF2FD]">
      <h3 className="text-3xl font-bold flex justify-center">
        Formação acadêmica
      </h3>
      <div className="flex flex-row justify-between">
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
            <span>2009 | 2013 - CNA</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
