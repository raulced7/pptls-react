import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">Inicio</Link>
        <div className="space-x-4">
          <Link to="/game" className="text-white">Juego</Link>
          <Link to="/contact" className="text-white">Contacto</Link>
          {/* Agrega más enlaces según sea necesario */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
