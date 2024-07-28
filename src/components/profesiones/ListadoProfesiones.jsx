import { useEffect, useState } from 'react';
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Listado de Profesiones</h1>
                <ul className="list-disc list-inside">
                    {profesiones.map(profesion => (
                        <li key={profesion.id} className="text-lg mb-2">
                            {profesion.profesion}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListadoProfesiones;


