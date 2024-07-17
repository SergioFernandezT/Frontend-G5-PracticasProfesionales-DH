import React, { useState, useEffect } from 'react';
import { getProfesionById, updateProfesion } from '../../components/servicios/profesionesService';
import { useParams, useNavigate } from 'react-router-dom';

const ModificarProfesion = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profesion, setProfesion] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfesionById(id);
                setProfesion(result.profesion);
            } catch (error) {
                console.error('Error fetching the profession:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfesion(id, { profesion });
            navigate('/profesiones');
        } catch (error) {
            console.error('Error updating the profession:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Modificar Profesión</h2>
                <div className="mb-4">
                    <label htmlFor="profesion" className="block text-gray-700 font-bold mb-2">Profesión:</label>
                    <input
                        type="text"
                        id="profesion"
                        value={profesion}
                        onChange={(e) => setProfesion(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Modificar
                </button>
            </form>
        </div>
    );
};

export default ModificarProfesion;
