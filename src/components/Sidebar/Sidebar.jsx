//Revisar Responsive
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";
import { useState } from "react";
import NavPage from "../NavPage/NavPage";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const activeLink = "ml-2 font-handjet text-purple text-2xl font-bold hover:text-purple";
    const normalLink = "font-handjet font-bold text-white text-2xl hover:text-purple hover:ml-2 ";


    return (
        <div className="flex">
            <div className={` ${open ? "w-1/3" : "w-20 "}
            bg-purple-dark bg-gradient-to-r from-purple-black to-wine h-screen p-5 pt-8 relative duration-300`}
            >
                <img
                    src="./assets/moon.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-black
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)} />
                <div className="md:flex gap-x-4 items-center">
                    <img src="./assets/icon.png" className={`w-auto h-9 duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`font-rubikG text-purple origin-left md:text-4xl  duration-200 ${!open && "scale-0" }`}
                    > SANDRA ASTORGA </h1>
                </div>
                <ul className="md:mt-12 py-7">
                    {SidebarData.map((item, index) => (
                        <li className="mt-2"
                            key={index}>
                            <NavLink to={item.path}
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink}>
                                <span className={`${!open && "hidden"}  md:ml-20 origin-left duration-200`}>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            <div className={`md:flex gap-x-3 md:mt-5 > text-purple duration-200 ${!open && "scale-0"}`}>
                <a href='https://www.linkedin.com/in/sandraastorga13'>
                    <BsLinkedin className="w-7 h-7 md:ml-20 rounded-full hover:-translate-y-1 text-purple" />
                </a>
                <a href="https://github.com/SandyAstorga">
                    <BsGithub className=" w-7 h-7 rounded-full hover:-translate-y-1 text-purple" />
                </a>
            </div>
            <div className={`md:flex md:mt-5 py-7  text-purple duration-200 ${!open && "scale-0"}`}>
                <span className="font-handjet font-bold text-white md:text-ms">
                    Creada y Diseñada por Sandra Astorga 💟
                </span>
            </div>
            </div>

            <div className="h-screen flex-1 p-10">
                <NavPage />
            </div>
        </div>
    );
}

export default Sidebar;
