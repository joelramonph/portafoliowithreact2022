import React from 'react'
import "./about.css"
import AwardFi from "../../img/garantia.png"
import CodeDay from "../../img/scratchDay2018VersionWeb.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className="about__left">
            <div className="about__card bg">

            </div>
            <div className="about__card">
                <img 
                src={CodeDay}
                alt="profesor en clase con estudiantes" 
                className='about__img'/>
            </div>
        </div>
        <div className="about__right">
            <h1 className='about__title'>Sobre mi</h1>

            <p className='about__sub'>
                Vengo del sector aeronáutico, donde laboré por más de 15 años como
                controlador aéreo. Soy autodidacta,
                me gusta leer y contemplar la naturaleza en especial mirar al cielo. 
                Trabajo con react, redux y nodejs.
                
            </p>
            <p  className='about__description'>
                Desarrollo sitios web personales, comercio electrónico, desarrollo
                de API REST con Express. Puedo cumplir roles tanto de frontend como
                de backend.
                
            </p>
            <div className="about__award">
                <img src={AwardFi} alt="certificado de aprobación" className="img__about-award" />
                <div className="about__award-texts">
                 <h4 className="about__award-title">Desarrollador Web Full Stack</h4>
                 <p className="about_award-desc">
                 Acreditación de competencias para el desarrollo de proyectos web:
                 con React, Redux,NodeJs,Express y Postgress.
                </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About