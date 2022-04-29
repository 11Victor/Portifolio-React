import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Olá! Eu sou </span>
                <span>Victor Valencio</span>
                <span>Desenvolvedor Full Stack com alto nível de conhecimento e experiência em Back-end, Front-end, Database e DevOps, produzindo com alta performance!</span>
            </div>
            <button className="button i-button">Contrate-me</button>
        </div>
        <div className="i-right">
            Texto teste
        </div>
    </div>
  )
}

export default Intro