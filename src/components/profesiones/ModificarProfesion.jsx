import React, { useState } from 'react';
import { updateProfesion, getProfesionById } from '../servicios/profesionesService';

const ModificarProfesion = () => {
    const [id, setId] = useState('');
    const [profesion, setProfesion] = useState('');

    const handleFetchProfesion = async () => {
        try {
            const data = await getProfesionById(id);
            setProfesion(data.profesion);
        } catch (error) {
            console.error('Error al buscar la profesión:', error);
            alert('Hubo un error al buscar la profesión');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfesion(id, { profesion });
            setId('');
            setProfesion('');
            alert('Profesión modificada exitosamente');
        } catch (error) {
            console.error('Error al modificar la profesión:', error);
            alert('Hubo un error al modificar la profesión');
        }
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
