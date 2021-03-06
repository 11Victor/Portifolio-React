import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Victor</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Experiência</li>
                    <li>Portfólio</li>
                    <li>Depoimentos</li>
                </ul>
            </div>
            <button className="button n-button">
                Contato
            </button>
        </div>
    </div>
  )
}

export default Navbar