import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="max-w-md p-14 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <form>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border rounded-md mb-3" />

          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md mb-3" />

          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje:</label>
          <input type="text" id="mensaje" name="mensaje" className="w-full px-3 py-2 border rounded-md mb-3" />


          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
