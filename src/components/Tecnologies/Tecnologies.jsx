//Responsive
const Tecnologies = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-purple-black md:h-screen py-10 bg-gradient-to-r from-wine">
            <div className="h-32 w-40 mx-auto animate-fade-in-y  justify-center items-center">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Lenguajes de Programacion</h1>
                <img src="./assets/javascript.png" alt="" className="w-16 h-16 mx-auto mt-2 hover:scale-110" />
            </div>
            <div className="h-32 w-40 mx-auto animate-fade-in-y flex flex-wrap justify-center items-center">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Frameworks y FrontEnd</h1>
                <img src="./assets/redux.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/react.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />                 
                <img src="./assets/HTML.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/CSS.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />                 
                <img src="./assets/figma.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
            </div>
            <div className="mt-32 h-32 w-40 mx-auto animate-fade-in-y flex flex-wrap justify-center items-center">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Base de Datos y BackEnd</h1>
                <img src="./assets/node.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/express.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/postgresql.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/sequelize.png" alt="" className=" w-16 h-16  mx-auto mt-2 hover:scale-110" />
            </div>
            <div className="mt-14 h-32 w-40 mx-auto animate-fade-in-y flex flex-wrap justify-center items-center">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Desarrollo y Colaboración</h1>
                <img src="./assets/github.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/git.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/jira.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
                <img src="./assets/slack.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
            </div>
            <div className="mt-14 h-32 w-40 mx-auto animate-fade-in-y justify-center items-center">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Metodologias Agiles</h1>
                <img src="./assets/scrum.png" alt="" className=" w-16 h-16 mx-auto mt-2 hover:scale-110" />
            </div>
        </div>
    );
};

export default Tecnologies;
