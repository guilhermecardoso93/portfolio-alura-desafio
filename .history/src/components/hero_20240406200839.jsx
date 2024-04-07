import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <main className="py-32">
      <h1 className="text-6xl font-bold pb-8">
        Olá, meu nome é Guilherme Cardoso
        <br /> e construo páginas web
      </h1>
      <span className='font-normal text-[22px]'>
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
