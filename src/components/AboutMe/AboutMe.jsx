//Responsive
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <>
            <div className="md:justify-center md:items-center ">
                <div className="ml-5">
                    <img src="./assets/perfil.jpg" alt="" className=" h-52 w-52 hover:scale-110" />
                </div>
                <div className="text-center md:text-left  md:ml-9 animate-fade-in-y">
                    <p className="font-handjet font-bold text-white md:text-xl md:max-w-md md:ml-32 ">
                        Soy Desarrolladora Web Full Stack con educación profesional en Ingeniería en Sistemas Computacionales, lo que me ha permitido comprender la relevancia de las tecnologías en el mundo actual.
                    </p>
                    <p className="font-handjet font-bold text-white  md:text-xl md:max-w-md md:py-2 md:ml-32">
                        Mi enfoque principal se centra en el Front-end, donde he concentrado mis esfuerzos en proyectos recientes.
                    </p>
                    <p className="font-handjet font-bold text-white md:text-xl md:max-w-md md:ml-32">
                        Poseo habilidades en el manejo de
                        <Link to="/tecnologies">
                            <button className="bg-purple rounded-lg text-purple-black md:w-14 h-6 ml-1 hover:-translate-y-1">React</button>,
                            <button className="bg-purple rounded-lg text-purple-black md:w-14 h-6 ml-1 hover:-translate-y-1">Redux</button>,
                            <button className="bg-purple rounded-lg text-purple-black md:w-24 h-6 ml-1 hover:-translate-y-1">Javascript</button>
                            , entre otras. Cuento con un nivel de Inglés A2 (Elemental).
                        </Link>
                    </p>
                </div>
            </div>
            <div className="text-center mt-4 md:ml-80 md:mr-28">
                <a href='/CV Sandra Astorga.pdf' download={''}>
                    <button className="bg-purple text-white hover:text-purple-black font-bold font-handjet text-2xl h-11 w-44 rounded-lg hover:scale-110">Descargar CV</button>
                </a>
            </div>
        </>
    );
};

export default AboutMe;
