

const Proyects = () => {
    return (
        <div className="bg-purple-black w-3/5 h-screen ml-auto py-4">
            <div className="">
                <h1 className="font-rubikG text-purple text-2xl">Proyecto Grupal - GymGo</h1>
                <h2 className="font-handjet text-white font-bold text-xl">Henry Bootcamp (Junio 2023 - Julio 2023)</h2>
                <a href="https://gym-go-five.vercel.app">
                <img src="./src/assets/gymgo.jpg" alt="" className=" rounded-full h-44 w-44" />
                </a>
            </div>
            <div className=" absolute ml-80 mr-2 -mt-40 space-x-px"> 
                <a href="https://gym-go-five.vercel.app">
                <h1 className="font-rubikG text-purple text-2xl">Gym-Go</h1>
                </a>
                <p className="font-handjet text-white font-bold text-xl">Es una aplicación web que optimiza la gestión de gimnasios modernos, destacando por su enfoque flexible y cómodo. Esta plataforma brinda a administradores y usuarios una experiencia fitness única.</p>
            </div>
            <div className="">
                <h1 className="font-rubikG text-purple text-2xl">Proyecto Individual - BonAppetit</h1>
                <h2 className="font-handjet text-white font-bold text-xl">Henry Bootcamp (Mayo 2023 - Junio 2023)</h2>
                <a href="https://pi-food-deploy-ten.vercel.app/">
                <img src="./src/assets/pifood.jpg" alt="" className=" rounded-full h-44 w-44" />
                </a>
            </div>
            <div className=" absolute ml-80 mr-2 -mt-40 space-x-px"> 
                <a href="https://pi-food-deploy-ten.vercel.app/">
                <h1 className="font-rubikG text-purple text-2xl">BonAppetit</h1>
                </a>
                <p className="font-handjet text-white font-bold text-xl">La app es un catálogo interactivo de recetas. Los usuarios encuentran platos con detalles de preparación, dieta y salud. La interfaz intuitiva permite ordenar y filtrar recetas según preferencias. También permite añadir o eliminar recetas personales, fomentando la colaboración en la comunidad culinaria.</p>
            </div>
        </div>
    )
}

export default Proyects
