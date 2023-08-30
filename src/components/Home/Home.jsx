//Responsive
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Desarrolladora', 'Web', 'Fullstack'],
            typeSpeed: 50,
            backSpeed: 25,
            startDelay: 1000,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed(textRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className='md:mt-8 md:mr-6 md:ml-6 text-center font-handjet font-bold text-white text-3xl'>
            <span ref={textRef}></span>
            </div>
            <h3 className="font-handjet text-ms font-bold text-white mt-2 md:ml-8 duration-200">Enfocada en el Front-end, transformando ideas en realidad</h3>
            <img src="./assets/home.png" alt="" className="mx-auto md:w-2/3 h-auto animate-pulse" />
        </>
    )
}

export default Home
