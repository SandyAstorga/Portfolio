import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Landing = () => {
    const handleDarkMode =() => {

    }
    return (
        <div className=" fixed bg-purple-dark w-2/5 h-screen py-12">
            <div className="text-center mr-6 ml-96">
                <button className="h-11 w-11 mt-1 " onClick={handleDarkMode}>
                    <img src="./src/assets/moon.png" alt="" className="hover:-translate-x-5 "/>
                </button>
            </div>
            <div className="text-center mr-4 ml-4 mt-20">
                <h1 className="font-rubikG text-5xl text-purple">
                    <span className="drop-shadow-xl ">SANDRA ASTORGA</span>
                </h1>
                <h2 className="font-handjet text-3xl font-bold text-white py-2">Desarrolladora Web Full Stack</h2>
                <h3 className="font-handjet text-xl font-bold text-white">Enfocada en el Front-end, transformando ideas en realidad</h3>
            </div>

            <div className="fixed font-handjet font-bold text-white text-2xl mt-11 text-justify mr-40 ml-44 flex-auto block">
                <Link to="/about" className="hover:text-purple hover:text-4xl transition duration-300 ease-in-out block">
                    SOBRE MI
                </Link>
                <Link to="/tecnologies" className="hover:text-purple hover:text-4xl duration-300 ease-in-out block">
                    TECNOLOGIAS
                </Link>
                <Link to="/projects" className="hover:text-purple hover:text-4xl transition duration-300 ease-in-out block">
                    PROYECTOS
                </Link>
                <Link to="/contact" className="hover:text-purple hover:text-4xl transition duration-300 ease-in-out block">
                    CONTACTO
                </Link>
            </div>
            <a href='https://www.linkedin.com/in/sandraastorga13'>
                <BsLinkedin className="absolute ml-20 mt-56 w-7 h-7 rounded-full hover:-translate-y-1 hover:text-purple" />
            </a>
            <a href="https://github.com/SandyAstorga">
                <BsGithub className="absolute ml-28 mt-56 w-7 h-7 rounded-full hover:-translate-y-1 hover:text-purple" />
            </a>
        </div>
    )
}

export default Landing
