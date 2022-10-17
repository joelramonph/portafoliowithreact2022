import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/llamadatelefonica2.png";
import Email from "../../img/emailColor.png";
import Location from "../../img/marcador-de-posicion.png";
import { ThemeContext } from "../../context";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDeafault();
    emailjs
      .sendForm(
        "service_xgzxckd",
        "template_bubs2aj",
        formRef.current,
        "wcjKLpurk49hmtINn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__bg"></div>
      <div className="contact__wrapper">
        <div className="contact__left">
          <h1 className="contact__title">Cuentame sobre tu idea y te ayudo</h1>
          <div className="contact__info">
            <div className="contact__info-item">
              <img src={Phone} alt="" className="contact__icon" />
              +584145308265
            </div>

            <div className="contact__info-item">
              <img src={Email} alt="" className="contact__icon" />
              joelramonph@gmail.com
            </div>

            <div className="contact__info-item">
              <img src={Location} alt="" className="contact__icon" />
              Barinas,Venezuela.
            </div>
          </div>
        </div>

        <div className="contact__right">
          <p className="contact__description">
            <b>Cuentame tú idea</b> si puedo ayudarte trabajamos juntos en el
            desarrollo. ¿Te parece?
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Nombre"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Asunto"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="10"
              placeholder="Mensaje"
              name="message"
            />
            <button>Submit</button>
            {done && "Gracias tus datos han sido enviados"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
