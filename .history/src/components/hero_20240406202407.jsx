import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <main className=" flex flex-row justify-between py-32 items-center">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-6xl font-bold">
          Olá, meu nome é Guilherme Cardoso
          <br /> e construo páginas web
        </h1>
        <span className="font-normal text-[22px]">
          Oi! Pode me chamar de Gui. Depois de 10 anos no mesmo emprego eu
          resolvi encontrar um novo caminho e a área de Desenvolvimento me
          pegou. Desde então já faz mais de um ano que comecei a estudar e o
          Front-End me conquistou.
        </span>
        <ul className="flex flex-row gap-10 items-start">
          <li>
            <a
              className="flex flex-row cursor-pointer"
              href="https://github.com/guilhermecardoso93"
              target="_blank"
            >
              GitHub
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
              target="_blank"
              className="flex flex-row cursor-pointer"
            >
              Linkedin
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/guicardoso93/"
              className="flex flex-row cursor-pointer"
            >
              Instragam
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a
              className="flex flex-row cursor-pointer"
              href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
            >
              WhatsApp
              <ArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
      <img
        src="https://github.com/guilhermecardoso93.png"
        alt=""
        className="w-auto p-auto rounded-full"
      />
    </main>
  );
}
