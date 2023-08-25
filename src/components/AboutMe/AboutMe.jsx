

const AboutMe = () => {
    return (
        <div className="bg-purple-black w-3/5 h-screen ml-auto py-2">
            <div className="py-2 mr-96 ml-2">
                <img src="./src/assets/perfil.jpg" alt="" className=" h-60 w-60 ml-12"/>
            </div>
            <div className="mr-28 ml-32  text-justify-center text-xl">
            <p className="font-handjet font-bold text-white">
                Soy Desarrolladora Web Full Stack con educación profesional en Ingeniería en Sistemas Computacionales, lo que me ha permitido comprender la relevancia de las tecnologías en el mundo actual.
            </p>
            <p className="font-handjet font-bold text-white py-2">
                Mi enfoque principal se centra en el Front-end, donde he concentrado mis esfuerzos en proyectos recientes.
            </p>
            <p className="font-handjet font-bold text-white">
                Poseo habilidades en el manejo de React, Redux, Javascript entre otras. Cuento con un nivel de Inglés A2 (Elemental).
            </p>
            </div>
            <div className="py-7 ml-80 mr-28 text-right">
                <button className="bg-purple text-white font-bold font-handjet text-2xl h-11 w-44 rounded-lg ">Descargar CV</button>
            </div>
            
        </div>
    )
}

export default AboutMe
