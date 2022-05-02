import React, { useRef } from 'react'
import './Contato.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v1tf47i', 'template_hyuel1h', form.current, 'gUULwrnJxGFMhIaA-')
      .then((result) => {
          console.log(result.text);
          toast.success('Obrigado pelo contato!');
          document.getElementById('myform').reset();
      }, (error) => {
          console.log(error.text);
          toast.error("Erro na requisição, tente novamente mais tarde!")
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
        <form name='myform' ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Nome" required="true" />
          <input type="email" name="user_email" className="user" placeholder="Email" required="true" />
          <input type="number" name="phone" className="user" placeholder="11988888888"/>
          <textarea name="message" className="user" placeholder="Mensagem" required="true" />
          <input type="submit" value="Enviar" className="button"/>
        </form>
      </div>

    </div>
  )
}

export default Contato