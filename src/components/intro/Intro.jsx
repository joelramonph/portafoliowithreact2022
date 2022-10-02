import React from "react";
import "./intro.css";
import Me from "../../img/me.png"


const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left-wrapper">
          <h2 className="intro__intro">¡Hola! soy</h2>
          <h1 className="intro__name">Joel Parra</h1>
          <div className="intro__title">
            <div className="intro__title-wrapper">
              <div className="intro__title-item">Desarrollador Web</div>
              <div className="intro__title-item">Instructor</div>
              <div className="intro__title-item">Asesor CRM y ERP</div>
              <div className="intro__title-item">Aficionado Arduino</div>
            </div>
          </div>
          
            <p className="intro__description">
             Soy desarrollador web, me gusta trabajar  en la creación y mantenimiento
              de plataformas de comercio electrónico y sistemas administrativos, 
              además de instructor en el área de programación educativa para niños y
              adolescentes con Scratch, Arduino y AppInventor.
            
            </p>

        </div>
      </div>
      <div className="intro__right">
        <div className="intro__bg"></div>
        <img src={Me} alt="" className="intro__img"/>
      </div>
    </div>
  );
};

export default Intro;
