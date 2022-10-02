import React from "react";
import "./intro.css";
import Me from "../../img/me.png"


const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left-wrapper">
          <h2 className="intro__intro">¡Hola soy</h2>
          <h1 className="intro__name">Joel Parra!</h1>
          <div className="intro__title">
            <div className="intro__title-wrapper">
              <div className="intro__title-item">Web Developer Full Stack</div>
              <div className="intro__title-item">Head Coach</div>
              <div className="intro__title-item">Arduino Hobbies</div>
              <div className="intro__title-item">Sales Admistration System</div>
              <div className="intro__title-item">Content Creator</div>
            </div>
          </div>
          
            <p className="intro__description">
            I developer services
            specialists in e-commerce web solutions
             and administrative systems, as well as an instructor in the area of
             educational programming for children and adolescents.
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
