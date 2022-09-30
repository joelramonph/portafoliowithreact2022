import React from 'react'
import './toggle.css'
import sun from "../../img/location.png"
import moon from "../../img/email.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
 const theme = useContext(ThemeContext);
 const handleClick = () =>{
  theme.dispatch({type:"TOGGLE"})
 }
  return (
    <div className='toggle'>
      <img src={sun} alt="" className='toggle__icon' />
      <img src={moon} alt="" className='toggle__icon' />
      <button className='toggle__btn' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></button>
    </div>
  )
}

export default Toggle