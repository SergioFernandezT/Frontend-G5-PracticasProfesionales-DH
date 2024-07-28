import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AspiranteDetail() {
    const { id } = useParams();
    const [aspirante, setAspirante] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3737/api/aspirantes/detail/${id}`)
            .then(response => response.json())
            .then(data => setAspirante(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    const calculateAge = (birthdate) => {
        const birthDate = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    console.log(aspirante)

    if (!aspirante) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 h-auto md:min-h-dvh w-full flex flex-col gap-4 md:items-start">
            <div className='w-full px-3 pb-3 border-b-2 flex flex-col sm:flex-row items-center justify-between'>
                <img
                    src={aspirante.imagen || "default_cover_img_url"}
                    alt={`${aspirante.nombre} ${aspirante.apellido}'s cover`}
                    className="bg-gray-200 w-52 h-52 object-cover rounded-lg"
                />
                <div className='w-[75%] p-4'>
                    <div className="flex flex-col items-center md:items-start py-2 mb-4">
                        <h2 className="text-2xl font-semibold">{`${aspirante.nombre} ${aspirante.apellido}`}</h2>
                        <p className="text-gray-600 text-xl">{aspirante.profesion}</p>
                    </div>
                    <div className='text-start text-xl mb-4'>
                        <p>{aspirante.descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-around text-start text-xl h-80 w-full p-5 border shadow-sm rounded-lg">
                <p>
                    <strong className='font-bold' >Email: </strong>{aspirante.email}
                </p>
                <p>
                    <strong className='font-bold' >Teléfono: </strong> {aspirante.telefono}
                </p>
                <p>
                    <strong className='font-bold' >LinkedIn: </strong>
                    <a
                        href={aspirante.perfil_linkedin}
                        className="text-blue-500 hover:underline"
                    >
                        {aspirante.perfil_linkedin}
                    </a>
                </p>
                <p>
                    <strong className='font-bold' >Fecha de Nacimiento: </strong>{aspirante.fecha_nacimiento}
                </p>
                <p>
                    <strong className='font-bold' >Edad: </strong>{calculateAge(aspirante.fecha_nacimiento)}
                </p>
                <p>
                    <strong className='font-bold' >Sexo: </strong>{aspirante.sexo}</p>
            </div>
        </div>
    );
}

export default AspiranteDetail;
