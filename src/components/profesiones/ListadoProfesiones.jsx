import React, { useState, useEffect } from 'react';
import { getAllProfesiones, deleteProfesion } from '../servicios/profesionesService'; 

const ListadoProfesiones = () => {
    const [profesiones, setProfesiones] = useState([]);

    useEffect(() => {
        fetchProfesiones();
    }, []);

    const fetchProfesiones = async () => {
        try {
            const profesionesData = await getAllProfesiones();
            setProfesiones(profesionesData);
        } catch (error) {
            console.error('Error al obtener las profesiones:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProfesion(id);
            fetchProfesiones();
        } catch (error) {
            console.error('Error al eliminar la profesión:', error);
        }
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

