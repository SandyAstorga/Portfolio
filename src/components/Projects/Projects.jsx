

const Projects = () => {
    return (
        <>
        <div className=" md:flex items-center ">
            <div className="md:w-1/2 md:ml-5 py-6">
                <h1 className="animate-fade-in-y font-rubikG text-purple text-lg ml-5 mr-5 ">Proyecto Grupal - GymGo</h1>
                <h2 className="font-handjet text-white font-bold text-xl ml-5 mr-5 animate-fade-in-x">Henry Bootcamp (Junio 2023 - Julio 2023)</h2>
                <a href="https://gym-go-five.vercel.app">
                <img src="./assets/gymgo.jpg" alt="" className="md:ml-20 mt-2 rounded-full md:h-32 md:w-44 hover:scale-110" />
                </a>
            {/* </div> */}
            {/* <div className="md:w-1/3 md:ml-6">  */}
                <a href="https://gym-go-five.vercel.app">
                <h1 className="font-rubikG text-purple text-xl animate-fade-in-x">Gym-Go</h1>
                </a>
                <p className="font-handjet text-white font-bold text-lg mr-2 animate-fade-in-y">Es una aplicación web que optimiza la gestión de gimnasios modernos, destacando por su enfoque flexible y cómodo. Esta plataforma brinda a administradores y usuarios una experiencia fitness única.</p>
            </div>
            <div className="md:mt-14 md:w-1/2 md:ml-4 mr-3">
                <h1 className="font-rubikG text-purple text-lg ml-5 mr-5 animate-fade-in-y">Proyecto Individual - BonAppetit</h1>
                <h2 className="font-handjet text-white font-bold text-xl ml-5 mr-5 animate-fade-in-x">Henry Bootcamp (Mayo 2023 - Junio 2023)</h2>
                <a href="https://pi-food-deploy-ten.vercel.app/">
                <img src="./assets/pifood.jpg" alt="" className="md:ml-20 mt-2 rounded-full md:h-32 md:w-44 hover:scale-110" />
                </a>
            {/* </div> */}
            {/* <div className="md:w-1/2 md:ml-6">  */}
                <a href="https://pi-food-deploy-ten.vercel.app/">
                <h1 className="font-rubikG text-purple text-xl animate-fade-in-x">BonAppetit</h1>
                </a>
                <p className="font-handjet text-white font-bold text-lg mr-2 animate-fade-in-y">La app es un catálogo interactivo de recetas. Los usuarios encuentran platos con detalles de preparación, dieta y salud. La interfaz intuitiva permite ordenar y filtrar recetas según preferencias. También permite añadir o eliminar recetas personales, fomentando la colaboración en la comunidad culinaria.</p>
            </div>
        </div>
        </>
    )
}

export default Projects;
