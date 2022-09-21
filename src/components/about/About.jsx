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
            <h1 className='about__title'>About Me</h1>

            <p className='about__sub'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reprehenderit, quo?
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reprehenderit, quo?
            </p>
            <p  className='about__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quibusdam 
                ducimus! Corporis obcaecati nemo ex quam consequuntur sed? Cum, omnis?
                ducimus! Corporis obcaecati nemo ex quam consequuntur sed? Cum, omnis?
                ducimus! Corporis obcaecati nemo ex quam consequuntur sed? Cum, omnis?
            </p>
            <div className="about__award">
                <img src={AwardFi} alt="" className="img__about-award" />
                <div className="about__award-texts">
                 <h4 className="about__award-title">Honor al merito</h4>
                 <p className="about_award-desc">
                 lorem hjdhhdhhjdhjj
                 hbcbbbcbbcjhddhdhdh</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About