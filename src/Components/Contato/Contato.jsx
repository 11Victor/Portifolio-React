import React, { useRef } from 'react'
import './Contato.css'
import emailjs from '@emailjs/browser';

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v1tf47i', 'template_hyuel1h', form.current, 'gUULwrnJxGFMhIaA-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Entre em Contato</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="user"  placeholder="Nome"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <input type="tel" name="phone" className="user" placeholder="Celular"/>
          <textarea name="message" className="user" placeholder="Mensagem"/>
          <input type="submit" value="Enviar" className="button"/>
        </form>
      </div>

    </div>
  )
}

export default Contato