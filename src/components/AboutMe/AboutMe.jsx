import { Link } from "react-router-dom"


const AboutMe = () => {
    return (
        <div className="bg-purple-black  h-screen ml-auto py-2 bg-gradient-to-r from-wine">
            <div className="py-2 mr-96 ml-2 ">
                <img src="./src/assets/perfil.jpg" alt="" className=" h-60 w-60 ml-12 hover:scale-110"/>
            </div>
            <div className="mr-28 ml-32  text-justify-center text-xl animate-fade-in-y">
            <p className="font-handjet font-bold text-white">
                Soy Desarrolladora Web Full Stack con educación profesional en Ingeniería en Sistemas Computacionales, lo que me ha permitido comprender la relevancia de las tecnologías en el mundo actual.
            </p>
            <p className="font-handjet font-bold text-white py-2">
                Mi enfoque principal se centra en el Front-end, donde he concentrado mis esfuerzos en proyectos recientes.
            </p>
            <p className="font-handjet font-bold text-white">
                Poseo habilidades en el manejo de 
                <Link to="/tecnologies">
                <button className="bg-purple rounded-lg text-purple-black w-12 h-6 ml-1 hover:-translate-y-1">React</button>, 
                <button className="bg-purple rounded-lg text-purple-black w-12 h-6 ml-1 hover:-translate-y-1">Redux</button>,
                <button className="bg-purple rounded-lg text-purple-black w-20 h-6 ml-1 hover:-translate-y-1">Javascript</button>,  
                entre otras. Cuento con un nivel de Inglés A2 (Elemental).
                </Link>
            </p>
            </div>
            <div className="py-7 ml-80 mr-28 text-right">
                <a href='/Sandra_Astorga.pdf' download={''}>
                <button className="bg-purple text-white hover:text-purple-black font-bold font-handjet text-2xl h-11 w-44 rounded-lg hover:scale-110">Descargar CV</button>
                </a>
            </div>
            
        </div>
    )
}

export default AboutMe
