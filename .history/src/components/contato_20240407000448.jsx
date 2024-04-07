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
        <div className="flex-1 w-full gap-10 px-4">
          <h3 className="text-3xl font-bold flex justify-start">Contato</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="px-1">
              <input type="text" name="user_name" placeholder="Nome" required />
            </div>

            <div className="px-1">
              <input
                type="email"
                name="user_email"
                placeholder="E-mail"
                required
              />
            </div>
            <div sm={6} className="px-1">
              <input
                type="tel"
                name="user_phone"
                placeholder="Telefone"
                required
              />
            </div>
            <div className="px-1">
              <textarea
                rows={6}
                cols={30}
                placeholder="Mensagem"
                name="message"
                required
              ></textarea>
              <button type="submit" className="buttonContact">
                <span>Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
