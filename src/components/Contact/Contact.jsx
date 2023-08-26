

const Contact = () => {
  return (
    <div className="bg-purple-black h-screen ml-auto py-12 bg-gradient-to-r from-wine ">
      <div className="ml-14 mr-52 py-3 animate-fade-in-y">
        <h1 className="text-white font-rubikG text-2xl">¡Gracias por visitar mi perfil y espero podamos trabajar juntos pronto!</h1>
      </div>
      <form className=" animate-fade-in-y font-handjet text-white font-bold text-2xl py-6">
        <div className="ml-14 mr-52">
        <label>Nombre:</label>
        <input className="mr-52 rounded-lg"
          placeholder="Ingresar Nombre"
          type="text"
        />
        <label>Email:</label>
        <input 
          placeholder="Ingresar Email"
          type="text"
        />
        <label>Mensaje:</label>
        <textarea 
          placeholder="Mensaje"
          name="textarea"
          rows='5'
          cols='50'
        />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Contact;
