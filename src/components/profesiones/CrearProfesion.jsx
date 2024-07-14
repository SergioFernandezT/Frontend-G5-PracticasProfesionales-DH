import React, { useState } from 'react';
import { createProfesion } from './profesionesService';

const CrearProfesion = () => {
    const [profesion, setProfesion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProfesion({ profesion });
        setProfesion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Profesión</h2>
            <input
                type="text"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
                placeholder="Nueva Profesión"
                required
            />
            <button type="submit">Crear</button>
        </form>
    );
};

export default CrearProfesion;
