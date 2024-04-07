import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import ImgContact from "../../assets/contact.png";

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

}