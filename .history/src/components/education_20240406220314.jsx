import cna from "../assets/cna.jpg";
import oracle from "../assets/oracle.png";
import rocket from "../assets/rocket.png";

export function Education() {
  return (
    <div className="flex flex-col gap-10 mt-5 w-full">
      <h3 className="text-3xl font-bold flex justify-center">
        Formação acadêmica
      </h3>
      <div className="flex flex-row justify-between gap-3">
        <div className="flex flex-col">
          <div className="bg-white rounded-sm h-[286px] w-[368px] flex items-center justify-center">
            <img src={oracle} alt="" className="w-[292px] h-[170px] p-1" />
          </div>
          <span className="text-lg font-bold">Front-End</span>
          <span>2024- Alura | Oracle</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={rocket} alt="" />
          </div>
          <span>ReactJS - React Native</span>
          <span>2021-Rocketseat</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={cna} alt="" />
          </div>
          <span>Inglês</span>
          <span>2011 - CNA</span>
        </div>
      </div>
    </div>
  );
}
