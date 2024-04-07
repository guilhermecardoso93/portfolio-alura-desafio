import Cat from "../assets/caticon.svg";
import Gift from "../assets/gifticon.svg";
import Game from "../assets/gameicon.svg";
import Tv from "../assets/tvcion.svg";
import Cook from "../assets/cookicon.svg";
import Music from "../assets/musicicon.svg";

export function Hobbies() {
  return (
    <div>
      <div className="flex flex-col gap-10 mt-5 w-full">
        <h3 className="text-3xl font-bold flex justify-center">Hobbies</h3>
        <div>
          <ul className="flex flex-row gap-3 justify-between">
            <li className="w-[176px] h-[174px]  bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
              <img
                src={Game}
                alt="html5 logo"
                className="w-[50px] h-[40px]"
              />
              <span>Jogar League of Legends </span>
            </li>
            <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
              <img
                src={Music}
                alt="html5 logo"
                className="w-[50px] h-[40px]"
              />
              <span>Escutar Música</span>
            </li>
            <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
              <img
                src={Cat}
                alt="html5 logo"
                className="w-[50px] h-[40px]"
              />
              <span>Meus Gatos</span>
            </li>
            <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
              <img
                src={Cook}
                alt="html5 logo"
                className="w-[50px] h-[40px]"
              />
              <span>Comer</span>
            </li>
            <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
              <img
                src={Tv}
                alt="html5 logo"
                className="w-[50px] h-[40px]"
              />
              <span>Assistir Séries e Filmes</span>
            </li>
            <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
              <img
                src={Gift}
                alt="html5 logo"
                className="w-[50px] h-[40px]"
              />
              <span>Dar Presentes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
