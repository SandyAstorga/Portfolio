import './App.css'
import Landing from './views/Landing/Landing'
import AboutMe from './components/AboutMe/AboutMe'
import Tecnologies from './components/Tecnologies/Tecnologies'
import Projects from './components/Projects/Proyects'
import Contacto from './components/Contacto/Contacto'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Landing/>),
  },
  {
    path: "/about",
    element: (<AboutMe/>),
  },
  {
    path: "/tecnologies",
    element: (<Tecnologies/>),
  },
  {
    path: "/projects",
    element: (<Projects/>),
  },
  {
    path: "/contact",
    element: (<Contacto/>),
  },
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
