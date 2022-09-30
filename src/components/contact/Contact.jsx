import React, { useRef } from "react";
import "./contact.css";
import Phone from "../../img/llamada-telefonica.png";
import Email from "../../img/email.png";
import Location from "../../img/location.png";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDeafault();
  };

  return (
    <div className="contact">
      <div className="contact__bg"></div>
      <div className="contact__wrapper">
        <div className="contact__left">
          <h1 className="contact__title">Lets talk about your project</h1>
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
            <b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Ab,
            praesentium recusandae fugiat sit ipsam inventore!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="10" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
