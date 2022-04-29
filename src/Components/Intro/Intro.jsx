import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

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
            Texto teste
        </div>
    </div>
  )
}

export default Intro