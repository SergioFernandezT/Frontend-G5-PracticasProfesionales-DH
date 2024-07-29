import { useEffect, useState } from 'react';
import { getAllProfesiones } from '../../components/servicios/profesionesService';
import { getAspirantesPorProfesion } from '../../components/servicios/aspirantesService';

const ListadoProfesiones = () => {
    const [profesiones, setProfesiones] = useState([]);
    const [cantidadAspirantes, setCantidadAspirantes] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllProfesiones();
            setProfesiones(result);

            // Obtener la cantidad de aspirantes por profesión desde el servicio de aspirantes
            const aspirantesResult = await getAspirantesPorProfesion();
            const cantidadMap = aspirantesResult.reduce((acc, item) => {
                acc[item.profesion] = item.cantidad;
                return acc;
            }, {});
            setCantidadAspirantes(cantidadMap);
            console.log(cantidadAspirantes)
        };
        fetchData();
    }, []);

    return (
        <div className=" bg-slate-100 border-2 flex justify-center ">
            <div className="bg-white  m-2 rounded-md shadow-2xl w-full max-w-2xl border-2 border-slate-300 sm:my-14">
                <h1 className="text-2xl font-bold sm:m-5 text-center">Profesiones</h1>
                <ul className="text-pretty border-t-2  border-gray-100 sm:py-6">
                    {profesiones.map(profesion => (
                        <li key={profesion.id} className="text-lg mb-2 cursor-pointer">
                            {profesion.profesion} ({cantidadAspirantes[profesion.profesion] || 0})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListadoProfesiones;


