/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
// import validation from '../Contact/validation'
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData ] = useState({
  user_name: '',
  user_email: '',
  message: '',
})

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Envía el correo
    emailjs.sendForm('service_jocd60n', 'template_7gnvw1s', form.current, 'OlF1TmjkTsP_ofzms')
      .then((result) => {
        console.log(result.text);
  
        // Después de enviar el correo, muestra una notificación
        toast.success('Mensaje Enviado con Exito', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
  
        // Limpia el formulario
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error.text);
        
        // Si ocurre un error, puedes mostrar una notificación de error si lo deseas
        toast.error('Error al enviar el mensaje', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };
  
  return (
      <>
        <div className="md:flex md:items-center md:space-x-9 md:px-11 mt-5 ml-9 mr-9">
          <div className="md:w-1/2">
            <h1 className="text-white font-rubikG text-xl animate-fade-in-y">
              ¡Gracias por visitar mi perfil y espero que podamos trabajar juntos pronto!
            </h1>
          </div>
          {/* <div className="md:w-1/2"> */}
            <img
              src="./assets/mensaje.png"
              alt=""
              className="animate-fade-in-y md:mr-6 w-24 h-24 hover:scale-110 contrast-50"
            />
          {/* </div> */}
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="ml-9 md:mt-9 font-handjet text-white font-bold text-xl py-4 mr-9 animate-fade-in-x"
        >
          <label className="block mt-4">Nombre:</label>
          <input
            className="md:w-1/2 rounded-lg text-center text-black"
            placeholder="Ingresar Nombre"
            type="text"
            name="user_name"
          />
          <label className="block mt-4 ">Email:</label>
          <input
            className="md:w-1/2 rounded-lg text-center text-black"
            placeholder="Ingresar Email"
            type="email"
            name="user_email"
          />
          <label className="block mt-4 ">Mensaje:</label>
          <textarea
            className="md:w-1/2 rounded-lg mt-2 text-center text-black"
            placeholder="Mensaje"
            name="message"
            rows="4"
            cols="32"
          />
          <button
            value="Send"
            type='submit'
            className="bg-purple text-white hover:text-purple-black font-bold font-handjet text-xl h-10 w-24 rounded-lg hover:scale-110 ml-10"
          > Enviar </button>
        </form>
      </>
    );
}

export default Contact;

