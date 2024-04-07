import HTMLIcon from "../assets/html5icon.svg";
import CSSIcon from "../assets/cssicon.svg";
import ReactIcon from "../assets/reacticon.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import JsIcon from "../assets/jsicon.svg";

export function Skills() {
  return (
    <div className="flex flex-col gap-10 mt-5 w-full items-center" >
      <h3 className="text-3xl font-bold">Skills</h3>
      <div>
        <ul className="flex flex-row gap-3 justify-evenly">
          <li className="w-auto min-w-[176px] h-auto min-h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
            <img
              src={HTMLIcon}
              alt="html5 logo"
              className="w-[50px] h-[40px]"
            />
            <span>HTML5</span>
          </li>
          <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
            <img src={CSSIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
            <span>CSS</span>
          </li>
          <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
            <img src={JsIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
            <span>Javascript</span>
          </li>
          <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
            <img
              src={TailwindIcon}
              alt="html5 logo"
              className="w-[50px] h-[40px]"
            />
            <span>TailwindCSS</span>
          </li>
          <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
            <img
              src={ReactIcon}
              alt="html5 logo"
              className="w-[50px] h-[40px]"
            />
            <span>ReactJS</span>
          </li>
          <li className="w-[176px] h-[174px] bg-white flex-col p-3 gap-2 flex items-start justify-end rounded-sm">
            <img
              src={ReactIcon}
              alt="html5 logo"
              className="w-[50px] h-[40px]"
            />
            <span>React Native</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
