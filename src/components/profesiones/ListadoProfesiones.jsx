import React, { useEffect, useState } from 'react';
import { getAllProfesiones } from '../../components/servicios/profesionesService';

const ListadoProfesiones = () => {
    const [profesiones, setProfesiones] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllProfesiones();
            setProfesiones(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Listado de Profesiones</h1>
            <ul>
                {profesiones.map(profesion => (
                    <li key={profesion.id}>{profesion.profesion}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListadoProfesiones;


