import React from "react";
import "./contact.css";
import Phone from "../../img/llamada-telefonica.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"










const Contact = () => {

  return (
    <div className="contact">
      <div className="contact__bg"></div>
      <div className="contact__wrapper">
        <div className="contact__left">
          <h1 className="contact__title">Lets talk about your project</h1>
          <div className="contact__info">
          
          <div className="contact__info-item">
            <img src={Phone} alt="" className="contact__icon" />
          </div>
          04145308265

          <div className="contact__info-item">
            <img src={Email} alt="" className="contact__icon" />
          </div>
          joelramonph@gmail.com

          <div className="contact__info-item">
            <img src={Location} alt="" className="contact__icon" />
          </div>
         
          
          </div>
        </div>
        <div className="contact__right">
          <p className="contact__description">
           <b>Lorem ipsum dolor sit amet</b>  consectetur adipisicing elit. Ab,
             praesentium recusandae fugiat sit ipsam inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
