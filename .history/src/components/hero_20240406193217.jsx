import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <main>
      <h1>Olá, meu nome é Guilherme Cardoso e construo páginas web</h1>
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
