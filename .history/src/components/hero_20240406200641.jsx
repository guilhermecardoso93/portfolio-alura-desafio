import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <main className='py-32'>
      <h1 className='text-6xl font-bold'>Olá, meu nome é Guilherme Cardoso<br/> e construo páginas web</h1>
      <span>
        Eu sou formada em lorem ipsum sit amet consectetur e atualmente estou
        participando no projeto Oracle ONE na Alura.
      </span>
      <ul>
        <li>
          <a>
            GitHub
            <ArrowUpRight />
          </a>
        </li>
        <li>
          <a>
            Linkedin
            <ArrowUpRight />
          </a>
        </li>
        <li>
          <a>
            Instragam
            <ArrowUpRight />
          </a>
        </li>
        <li>
          <a>
            Currículo
            <ArrowUpRight />
          </a>
        </li>
      </ul>
    </main>
  );
}
