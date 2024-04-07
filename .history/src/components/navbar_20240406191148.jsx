import Logo from '../assets/logo.png';

export function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logotico GC"  className='w-[120px] h-[100px]'/>
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