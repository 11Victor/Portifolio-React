import React from 'react'
import './Servicos.css'
import frontend from "../../img/front-end.png";
import backend from "../../img/back-end.png";
import devops from "../../img/devops.png";
import database from "../../img/database.png";
import Cards from '../Cards/Cards';
import Curriculo from './Victor_Valencio-CV.pdf'

const Servicos = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>Serviços</span>
            <spane>
                Verifique todos serviços que ofereço!
                <br/>
                Ou baixe meu currículo no link abaixo.    
            </spane>
            <a href={Curriculo} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        <div className="cards">
            <div style={{top: "1rem", left: '22rem'}}>
            <Cards
                image = {backend}
                title = {'Back-end'}
                info = {<ul>
                <li>Java 8 e 11</li>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>TDD e JUnit</li>
                <li>API's RESTful</li>
                <li>Arquitetura MVC e DTO</li>
                <li>Servlet Tomcat e Glassfish/Payara</li>
                <li>Apache Maven e Ant</li>
                </ul>}
            />
            </div>
            <div style={{top: "13rem", left: '1rem'}}>
            <Cards
                image = {frontend}
                title = {'Front-end'}
                info = {<ul>
                <li>HTML5 e CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>ReactJs</li>
                <li>Angular</li>
                <li>Bootstrap</li>
                </ul>}
            />
            </div>
            <div style={{top: "26rem", left: '22rem'}}>
            <Cards
                image = {database}
                title = {'Database'}
                info = {<ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Oracle</li>
                <li>MongoDB</li>
                </ul>}
            />
            </div>
            <div style={{top: "22rem", left: '-20rem'}}>
            <Cards
                image = {devops}
                title = {'DevOps'}
                info = {<ul>
                <li>Docker</li>
                <li>Swagger</li>
                <li>Pipeline CI/CD</li>
                <li>Sonarqube</li>
                <li>AWS: EC2 / ECS / ECR</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Github e Bitbucket</li>
                </ul>}
            />
            </div>
        </div>
    </div>
  )
}

export default Servicos