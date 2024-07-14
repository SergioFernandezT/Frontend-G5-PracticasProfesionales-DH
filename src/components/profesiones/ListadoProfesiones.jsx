import React, { useState, useEffect } from 'react';
import { getAllProfesiones, deleteProfesion } from './profesionesService';

const ListadoProfesiones = () => {
    const [profesiones, setProfesiones] = useState([]);

    useEffect(() => {
        fetchProfesiones();
    }, []);

    const fetchProfesiones = async () => {
        const profesionesData = await getAllProfesiones();
        setProfesiones(profesionesData);
    };

    const handleDelete = async (id) => {
        await deleteProfesion(id);
        fetchProfesiones();
    };

    return (
        <div>
            <h2>Listado de Profesiones</h2>
            <ul>
                {profesiones.map((profesion) => (
                    <li key={profesion.id}>
                        {profesion.profesion}
                        <button onClick={() => handleDelete(profesion.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListadoProfesiones;
