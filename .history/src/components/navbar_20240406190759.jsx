import Logo from '../assets/logo.png';

export function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logotico GC" />
      <ul>
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
        <li>
          <a href="/">guilherme_cardosogui@hotmail.com</a>
        </li>
      </ul>
    </nav>
  )
}