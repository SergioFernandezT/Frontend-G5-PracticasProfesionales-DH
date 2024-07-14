import React, { useState } from 'react';
import { updateProfesion, getProfesionById } from './profesionesService';

const ModificarProfesion = () => {
    const [id, setId] = useState('');
    const [profesion, setProfesion] = useState('');

    const handleFetchProfesion = async () => {
        const data = await getProfesionById(id);
        setProfesion(data.profesion);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfesion(id, { profesion });
        setId('');
        setProfesion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Modificar Profesión</h2>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID de la Profesión"
                required
            />
            <button type="button" onClick={handleFetchProfesion}>Buscar</button>
            <input
                type="text"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
                placeholder="Nueva Profesión"
                required
            />
            <button type="submit">Modificar</button>
        </form>
    );
};

export default ModificarProfesion;
