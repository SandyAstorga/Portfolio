

const Contacto = () => {
  return (
    <div className="bg-purple-black w-3/5 h-screen ml-auto py-12">
      <div className="ml-14 mr-52 py-3">
        <h1 className="text-white font-rubikG text-2xl">¡Gracias por visitar mi perfil y espero podamos trabajar juntos pronto!</h1>
      </div>
      <form className="font-handjet text-white font-bold text-2xl py-6">
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

export default Contacto
