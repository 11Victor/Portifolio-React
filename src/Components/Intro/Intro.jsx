import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Olá! Eu sou </span>
                <span>Victor Valencio</span>
                <span>Desenvolvedor Full Stack com alto nível de conhecimento e experiência em Back-end, Front-end, Database e DevOps!</span>
            </div>
            <button className="button i-button">Contrate-me</button>
            <div className="i-icons">
              <a href="https://github.com/11Victor" rel="noopener noreferrer" target="_blank"><img target="_blank" src={GitHub} alt="" /></a>
              
              <a href="https://www.linkedin.com/in/victorvalencio/" rel="noopener noreferrer" target="_blank"><img src={Linkedin} alt="" /></a>

              <a href="https://www.instagram.com/victor__valencio/" rel="noopener noreferrer" target="_blank"><img src={Instagram} alt="" /></a>

            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <div style={{top: '-9%', left: '74%'}}>
              <FloatingDiv image={crown} txt1='Full' txt2='Stack'/>
            </div>
        </div>
    </div>
  )
}

export default Intro