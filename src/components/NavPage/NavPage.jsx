import { Routes, Route } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Tecnologies from "../Tecnologies/Tecnologies"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const NavPage = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/tecnologies" element={<Tecnologies/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </>
    )
}

export default NavPage
