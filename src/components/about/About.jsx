import React from 'react'
import "./about.css"
import AwardFi from "../../img/garantia.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about__left">
            <div className="about__card bg">

            </div>
            <div className="about__card">
                <img 
                src="https://img.freepik.com/foto-gratis/chica-confundida-empresarios-gerente-trabajando-su-nuevo-proyecto-aula_146671-16425.jpg?size=626&ext=jpg&uid=R18460437&ga=GA1.2.699696988.1656111714" 
                alt="" 
                className='about__img'/>
            </div>
        </div>
        <div className="about__right">
            <h1 className='about__title'>Sobre mi</h1>

            <p className='about__sub'>
                Vengo del sector aeronautico, donde labore por más de 15 años como
                controlador aéreo. Soy autodidadcta de las tecnologías de desarrollo web
                me gusta leer y contemplar la naturaleza en especial mirar al cielo. 
                Trabajo con react,redux y nodejs, además estoy en un continuo
                aprendizaje.
                
            </p>
            <p  className='about__description'>
                Desarrollo sitios web personales, comercio electrónico, desarrollo
                de API REST  con Express.
            </p>
            <div className="about__award">
                <img src={AwardFi} alt="" className="img__about-award" />
                <div className="about__award-texts">
                 <h4 className="about__award-title">Desarrollador Web Full Stack</h4>
                 <p className="about_award-desc">
                 Acreditación de competencias para el desarrollo de proyectos web:
                 con React,Redux,NodeJs,Express y Postgress.
                </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About