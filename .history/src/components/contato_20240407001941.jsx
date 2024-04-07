import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import ImgContact from "../assets/contato.png";

export function Contact() {
  const form = useRef();

  const sendEmail = async () => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k101ils",
        "template_7xv6tru",
        form.current,
        "RSSU760IHaANuHBew"
      )
      .then(
        (result) => {
          toast.success("Mensagem enviada! Obrigado.");
        },
        (error) => {
          toast.error("Por favor, escreva alguma coisa :(");
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex px-20 justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <img src={ImgContact} />
      </div>
      <div className="flex-1  gap-10 px-4">
        <h2 class="text-3xl font-bold flex justify-start">Contato</h2>
        <h3 class="">Quer entrar em contato comigo?</h3>
        <h3 class="">
          Preencha o formulário ao lado e entrarei em contato o mais rápido
          possível.{" "}
        </h3>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Nome"
            required
            className="w-[656px] h-[56px] border-b-2 p-2 focus:border-[#2A7ae4] focus:outline-none focus:bg-white rounded-sm"
          />
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            required
            className="w-[656px] h-[56px] border-b-2 p-2 focus:border-[#2A7ae4] focus:outline-none focus:bg-white rounded-sm"
          />
          <input
            type="text"
            id="assunto"
            placeholder="Assunto"
            className="w-[656px] h-[56px] border-b-2 p-2 focus:border-[#2A7ae4] focus:outline-none focus:bg-white rounded-sm"
          />
          <textarea
            rows={5}
            cols={40}
            placeholder="Mensagem"
            name="message"
            required
            className="w-[656px] h-auto border-b-2 p-2 focus:border-[#2A7ae4] focus:outline-none focus:bg-white rounded-sm"
          />
          <button type="submit" className="buttonContact">
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
}
