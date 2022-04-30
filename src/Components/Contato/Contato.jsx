import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Entre em Contato</span>
        </div>
      </div>

      <div className="c-right">
        <form action="">
        <input type="text" name="user_name" className="user"  placeholder="Nome"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Mensagem"/>
          <input type="submit" value="Enviar" className="button"/>
        </form>
      </div>

    </div>
  )
}

export default Contato