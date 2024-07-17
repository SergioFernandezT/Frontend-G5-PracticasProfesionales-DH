import React, { useState, useEffect } from 'react';
import { getProfesionById, updateProfesion } from '../../components/servicios/profesionesService';
import { useParams, useHistory } from 'react-router-dom';

const ModificarProfesion = () => {
    const { id } = useParams();
    const history = useHistory();
    const [profesion, setProfesion] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProfesionById(id);
            setProfesion(result.profesion);
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfesion(id, { profesion });
        history.push('/profesiones');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="profesion">Modificar Profesión:</label>
            <input
                type="text"
                id="profesion"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
            />
            <button type="submit">Modificar</button>
        </form>
    );
};

export default ModificarProfesion;


