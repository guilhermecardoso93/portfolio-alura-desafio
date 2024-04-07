import Logo from "../assets/logo.png";

export function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between itens-center px-20 sm:px-3">
      <img
        src={Logo}
        alt="logotipo GC"
        className="lg:w-[120px] Lg:h-[100px] sm:w-[40px] h-[40px]"
      />
      <ul className="flex items-center gap-5 sm:gap-2">
        <li className="sm:font-[10px]">
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
