import Logo from "../assets/logo.png";

export function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between itens-center px-20 sm:px-3">
      <img src={Logo} alt="logotipo GC" className="w-[120px] h-[100px]" />
      <ul className="flex items-center gap-5">
        <li>
          <a href="/">Sobre mim</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Hobbies</a>
        </li>
        <li>
          <a href="/">Formação</a>
        </li>
        <li>
          <a href="/">Projetos</a>
        </li>
        <li className="font-bold">
          <a href="/">guilherme_cardosogui@hotmail.com</a>
        </li>
      </ul>
    </nav>
  );
}
