

const Tecnologies = () => {
    return (
        <div className="flex bg-purple-black h-screen ml-auto py-4 bg-gradient-to-r from-wine ">
            <div className="h-32 w-40 ml-7 mt-12 animate-fade-in-y">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Lenguajes de Programacion</h1>
                <img src="./src/assets/javascript.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
            </div>
            <div className="h-32 w-40 mt-40 animate-fade-in-y ">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Frameworks y FrontEnd</h1>
                <img src="./src/assets/redux.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/react.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/HTML.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/CSS.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/figma.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
            </div>
            <div className="h-32 w-40  mt-12 animate-fade-in-y">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Base de Datos y BackEnd</h1>
                <img src="./src/assets/node.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/express.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/postgresql.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/sequelize.png" alt="" className=" w-16 h-16  ml-9 mt-2 hover:scale-110" />
            </div>
            <div className="h-32 w-40 mt-40 animate-fade-in-y">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Desarrollo y Colaboración</h1>
                <img src="./src/assets/github.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/git.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/jira.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
                <img src="./src/assets/slack.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
            </div>
            <div className="h-32 w-40 mt-12 mr-6 animate-fade-in-y">
                <h1 className="animate-fade-in-x font-handjet font-bold text-white text-center">Metodologias Agiles</h1>
                <img src="./src/assets/scrum.png" alt="" className=" w-16 h-16 ml-9 mt-2 hover:scale-110" />
            </div>
        </div>
    )
}

export default Tecnologies;