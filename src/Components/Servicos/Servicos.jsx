import React from 'react'
import './Servicos.css'
import frontend from "../../img/front-end.png";
import backend from "../../img/back-end.png";
import devops from "../../img/devops.png";
import database from "../../img/database.png";

const Servicos = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>Serviçõs</span>
            <spane>
                Verifique todos serviços que ofereço!
                <br/>
                Baixe meu currículo no link abaixo.    
            </spane>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        <div className="cards">
            direita
        </div>
    </div>
  )
}

export default Servicos