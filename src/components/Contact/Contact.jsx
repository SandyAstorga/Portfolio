import { useRef } from 'react';
// import validation from '../Contact/validation'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jocd60n', 'template_7gnvw1s', form.current, 'OlF1TmjkTsP_ofzms')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className=" bg-purple-black h-screen ml-auto py-6 bg-gradient-to-r from-wine">
      <div className="animate-fade-in-y ml-4 mr-52 px-5 mt-5">
        <h1 className="text-white font-rubikG text-2xl animate-fade-in-x">¡Gracias por visitar mi perfil y espero podamos trabajar juntos pronto!</h1>
      </div>
      <img src="./src/assets/mensaje.png" alt="" className="animate-fade-in-x ml-auto w-36 h-36 mr-11 -mt-16 hover:scale-110" />
      <form ref={form} onSubmit={sendEmail} className=" animate-fade-in-y font-handjet text-white font-bold text-2xl py-4 mr-11 ml-5">
        <label className="mr-6 ml-6">Nombre:</label>
        <input className="mr-52 rounded-lg text-center ml-2 text-black"
          placeholder="Ingresar Nombre"
          type="text"
          name="user_name"
        />
        <label className="block mr-6 ml-6 w-16 mt-6">Email:</label>
        <input className=" absolute -mt-6 ml-28 rounded-lg text-center text-black"
          placeholder="Ingresar Email"
          type="email"
          name="user_email"
        />
        <label className="block mr-6 ml-6 w-20 mt-6">Mensaje:</label>
        <textarea className="mt-2 rounded-lg ml-6 text-center text-black"
          placeholder="Mensaje"
          name="message" 
          rows='5'
          cols='50'
        />
        <button  value="Send" className=" bg-purple text-white hover:text-purple-black font-bold font-handjet text-2xl h-11 w-44 rounded-lg hover:scale-110 ml-6">Enviar</button>
      </form>
    </div>
  )
}

export default Contact;

