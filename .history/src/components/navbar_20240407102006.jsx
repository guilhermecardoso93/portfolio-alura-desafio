import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutme", label: "Sobre mim" },
    { href: "/skills", label: "Skills" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/education", label: "Formação" },
    { href: "/experience", label: "Projetos" },
  ];

  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img
              src={Logo}
              alt="logotipo GC"
              className="lg:w-[120px] lg:h-[110px] sm:w-[40px] h-[40px]"
            />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="lg:font-normal sm:font-[10px]">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="font-bold">
              <a href="/contact">guilherme_cardosogui@hotmail.com</a>
            </li>
          </ul>

          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <Menu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <a href="/">
              <img
                src={Logo}
                alt="logotipo GC"
                className="lg:w-[120px] lg:h-[110px] sm:w-[40px] h-[40px]"
              />
            </a>
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Menu className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label} className="lg:font-normal sm:font-[10px]">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="font-bold">
                <a href="/">guilherme_cardosogui@hotmail.com</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
