import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 border-b-2 border-black text-white shadow-md">
            <div className="p-4 sm:p-6 flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Recipe App
                </h1>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
                <nav className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg">
                        <li><Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link></li>
                        <li><Link to="/recipes" className="hover:text-gray-400 transition duration-300">Recipes</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
