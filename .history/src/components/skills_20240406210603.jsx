import HTMLIcon from "../assets/html5icon.svg";

export function Skills() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-bold">Skills</h3>
      <ul className="flex flex-row justify-between gap-3">
        <li className="w-[176px] h-[174px] bg-white flex-col p-3 flex items-start justify-end rounded-sm">
          <img src={HTMLIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
          <span>Javascript</span>
        </li>
        <li className="w-[176px] h-[174px] bg-white flex-col p-3 flex items-start justify-end rounded-sm">
          <img src={HTMLIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
          <span>CSS</span>
        </li>
        <li className="w-[176px] h-[174px] bg-white flex-col p-3 flex items-start justify-end rounded-sm">
          <img src={HTMLIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
          <span>TailwindCSS</span>
        </li>
        <li className="w-[176px] h-[174px] bg-white flex-col p-3 flex items-start justify-end rounded-sm">
          <img src={HTMLIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
          <span>ReactJS</span>
        </li>
        <li className="w-[176px] h-[174px] bg-white flex-col p-3 flex items-start justify-end rounded-sm">
          <img src={HTMLIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
          <span>React Native</span>
        </li>
        <li className="w-[176px] h-[174px] bg-white flex-col p-3 flex items-start justify-end rounded-sm">
          <img src={HTMLIcon} alt="html5 logo" className="w-[50px] h-[40px]" />
          <span>HTML5</span>
        </li>
      </ul>
    </div>
  );
}
