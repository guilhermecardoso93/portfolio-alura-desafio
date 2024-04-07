import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <main className=" flex flex-row justify-between py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold">
          Olá, meu nome é Guilherme Cardoso
          <br /> e construo páginas web
        </h1>
        <span className="font-normal text-[22px]">
          Eu sou formada em lorem ipsum sit amet consectetur e atualmente estou
          participando no projeto Oracle ONE na Alura.
        </span>
        <ul className="flex flex-row gap-10">
          <li>
            <a className="flex flex-row cursor-pointer">
              GitHub
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a className="flex flex-row cursor-pointer">
              Linkedin
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a className="flex flex-row cursor-pointer">
              Instragam
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a className="flex flex-row cursor-pointer">
              Currículo
              <ArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
      <img src="https://github.com/guilhermecardoso93.png" alt="" className="w-auto p-auto rounded-md" />
    </main>
  );
}
