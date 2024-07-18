import React, { useState } from 'react';
import { createProfesion } from '../../components/servicios/profesionesService';

const CrearProfesion = () => {
    const [profesion, setProfesion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProfesion({ profesion });
        setProfesion('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Crear Nueva Profesión</h2>
                <div className="mb-4">
                    <label htmlFor="profesion" className="block text-gray-700 font-bold mb-2">Nueva Profesión:</label>
                    <input
                        type="text"
                        id="profesion"
                        value={profesion}
                        onChange={(e) => setProfesion(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Crear
                </button>
            </form>
        </div>
    );
};

export default CrearProfesion;

