import HTMLIcon from "../assets/html5icon.svg";

export function Skills() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-bold">Skills</h3>
      <ul className="flex flex-row justify-between gap-3">
        <li className="w-[176px] h-[174px] bg-white flex flex-col justify-between bottom-0">
          <img src={HTMLIcon} alt="html5 logo" className="w-[20px] p-[20px]" />
        </li>
        <span>HTML5</span>
        <li>Javascript</li>
        <li>CSS</li>
        <li>ReactJS</li>
        <li>React Native</li>
        <li>TailwindCSS</li>
      </ul>
    </div>
  );
}
