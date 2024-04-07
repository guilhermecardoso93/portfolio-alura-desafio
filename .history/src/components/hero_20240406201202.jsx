import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <main className=" flex flex-row justify-between gap-4 py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold">
          Olá, meu nome é Guilherme Cardoso
          <br /> e construo páginas web
        </h1>
        <span className="font-normal text-[22px]">
          Eu sou formada em lorem ipsum sit amet consectetur e atualmente estou
          participando no projeto Oracle ONE na Alura.
        </span>
        <ul className="flex flex-row gap-3">
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
      </div>
      <img src="https://github.com/guilhermecardoso93.png" alt="" />
    </main>
  );
}
