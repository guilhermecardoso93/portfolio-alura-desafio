import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import ImgContact from "../assets/contato.png";

export function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpob7um",
        "template_4yxccck",
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
    <div className="flex justify-center mb-4" id='/contact'>
      <div className="flex flex-row justify-center sm:mx-50 lg:mx-44">
        <Toaster position="top-center" reverseOrder={false} />
        <div>
          <img src={ImgContact} className="lg:flex sm:hidden" />
        </div>
        <div className="flex-1 gap-10 px-4 flex-col justify-between">
          <h2 class="text-3xl font-bold flex justify-start">Contato</h2>
          <p>Quer entrar em contato comigo?</p>
          <p>
            Preencha o formulário ao lado e entrarei em contato o mais rápido
            possível.{" "}
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 mt-6">
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
              name="title"
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
            <button
              type="submit"
              className="w-[165px] h-[51px] bg-[#2A7ae4] border-2 text-white rounded-sm"
            >
              <span>Enviar mensagem</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
