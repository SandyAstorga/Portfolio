//Revisar Responsive
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";

const Sidebar = () => {
    const activeLink = "text-purple font-bold hover:text-purple";
    const normalLink = "text-white hover:text-purple hover:ml-4";

    const handleDarkMode = () => {

    }
    return (
        <>
            <div className="md:flex md:space-x-4 md:items-center md:mt-9 md:ml-4 md:mr-4">
                <button className="h-7 w-12 bg-purple-black md:rounded-2xl" onClick={handleDarkMode}>
                    <img src="./src/assets/moon.png" alt="" className="h-7 w-7 hover:translate-x-6" />
                </button>
            </div>
            <div className="text-center mt-4 md:mt-16">
            <Link to='/'>
                <h1 className="animate-pulse font-rubikG text-5xl text-purple hover:scale-110">
                SANDRA ASTORGA
                </h1>
            </Link>
                <h2 className="font-handjet text-3xl font-bold text-white py-2">Desarrolladora Web Full Stack</h2>
                <h3 className="font-handjet text-xl font-bold text-white">Enfocada en el Front-end, transformando ideas en realidad</h3>
            </div>     
            <nav className="font-handjet font-bold text-white md:text-2xl md:mt-11 md:text-justify md:mr-52 md:ml-36 md:block">
                { SidebarData.map((item, index) => {
                        return (
                            <div key={index}>
                                <NavLink to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}>
                                    <span>{item.title}</span>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>
            <div className="flex ml-16 mr-56 md:mt-16 space-x-2">
                <a href='https://www.linkedin.com/in/sandraastorga13'>
                    <BsLinkedin className="w-7 h-7 rounded-full hover:-translate-y-1 hover:text-purple" />
                </a>
                <a href="https://github.com/SandyAstorga">
                    <BsGithub className=" w-7 h-7 rounded-full hover:-translate-y-1 hover:text-purple" />
                </a>
            </div>
            <div className="md:mt-9 mt-3 md:ml-4 md:mr-20">
                <span className="font-handjet font-bold text-white ml-7">
                    Creada y Diseñada por Sandra Astorga 💟
                </span>
            </div>
        </>

    )
}

export default Sidebar;
