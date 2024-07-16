import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AspiranteDetail() {
    const { id } = useParams();
    const [aspirante, setAspirante] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3737/api/aspirantes/${id}`)
            .then(response => response.json())
            .then(data => setAspirante(data))
            .catch(error => console.error('Error:', error))
            .finally(() => setLoading(false));
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (aspirante) {return (
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Detalle del Aspirante</h1>
            <div className="flex flex-col items-start">
                <img 
                    src={aspirante.cover_img || "default_cover_img_url"} 
                    alt={`${aspirante.nombre} ${aspirante.apellido}'s cover`} 
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="flex items-center gap-4 mb-4">
                    <img 
                        src={aspirante.avatar_url || "default_avatar_url"} 
                        alt={`${aspirante.nombre} ${aspirante.apellido}'s avatar`} 
                        className="w-24 h-24 object-cover rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-semibold">{`${aspirante.nombre} ${aspirante.apellido}`}</h2>
                        <p className="text-gray-600">{aspirante.profesion}</p>
                    </div>
                </div>
                <p className="text-sm mb-4">{`Desarrollador web experimentado con pasión por crear sitios web modernos y responsivos.`}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <p><strong>Email:</strong> {aspirante.email}</p>
                    <p><strong>Teléfono:</strong> {aspirante.telefono}</p>
                    <p><strong>LinkedIn:</strong> <a href={aspirante.perfil_linkedin} className="text-blue-500 hover:underline">{aspirante.perfil_linkedin}</a></p>
                    <p><strong>Fecha de Nacimiento:</strong> {aspirante.fecha_nacimiento}</p>
                    <p><strong>Edad:</strong> {calculateAge(aspirante.fecha_nacimiento)}</p>
                    <p><strong>Sexo:</strong> {aspirante.sexo}</p>
                </div>
            </div>
        </div>
    
    );}
}

export default AspiranteDetail;
