// import { Routes, Route } from "react-router-dom";
// import AboutMe from "../AboutMe/AboutMe";
// import Tecnologies from "../Tecnologies/Tecnologies"
// import Projects from "../Projects/Projects"
// import Contact from "../Contact/Contact";
// import Home from "../Home/Home";

// const NavPage = () => {
//     return (
//         <>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<AboutMe/>}/>
//         <Route path="/tecnologies" element={<Tecnologies/>}/>
//         <Route path="/projects" element={<Projects/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//         </>
//     )
// }

// export default NavPage

import { useRoutes, Outlet } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Tecnologies from "../Tecnologies/Tecnologies";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutMe /> },
    { path: "/tecnologies", element: <Tecnologies /> },
    { path: "/projects", element: <Projects /> },
    { path: "/contact", element: <Contact /> },
];

const NavPage = () => {
    const routeResult = useRoutes(routes);

    return (
        <>
            {routeResult}
            <Outlet /> {/* Este Outlet es importante */}
        </>
    );
};

export default NavPage;
