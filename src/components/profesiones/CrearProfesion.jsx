import React, { useState } from 'react';
import { createProfesion } from '../servicios/profesionesService'; 

const CrearProfesion = () => {
    const [profesion, setProfesion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProfesion({ profesion });
            setProfesion('');
            alert('Profesión creada exitosamente');
        } catch (error) {
            console.error('Error al crear la profesión:', error);
            alert('Hubo un error al crear la profesión');
        }
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

