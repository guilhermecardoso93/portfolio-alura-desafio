import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export function Skills() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-bold">Skills</h3>
      <ul className="flex flex-row justify-between gap-3">
        <li className="w-[176px] h-[174px] bg-white">HTML5</li>
        <li>
          Javascript
          <faCoffee />
        </li>
        <li>CSS</li>
        <li>ReactJS</li>
        <li>React Native</li>
        <li>TailwindCSS</li>
      </ul>
    </div>
  );
}
