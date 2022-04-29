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
              <img src={GitHub} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            Texto teste
        </div>
    </div>
  )
}

export default Intro