import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Desarrollo', 'Diseño', 'Programación'],
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
        <div className="bg-purple-black h-screen  py-2 bg-gradient-to-r from-wine">
            <div className='mt-9 text-center font-handjet font-bold text-white text-3xl'>
            <span ref={textRef}></span>
            </div>
            <img src="./src/assets/home.png" alt="" className="ml-32 mt-9 w-2/3 h-auto animate-wiggle" />
        </div>
    )
}

export default Home