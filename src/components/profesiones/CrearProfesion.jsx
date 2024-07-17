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
        <form onSubmit={handleSubmit}>
            <label htmlFor="profesion">Nueva Profesión:</label>
            <input
                type="text"
                id="profesion"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
            />
            <button type="submit">Crear</button>
        </form>
    );
};

export default CrearProfesion;


