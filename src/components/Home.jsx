import React, { useEffect, useState } from 'react'
import CardAspirante from './aspirantes/CardAspirante'
import ListadoProfesiones from './profesiones/ListadoProfesiones'

export default function Home() {
  const [aspirantes, setAspirantes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3737/api/aspirantes`)
      .then(response => response.json())
      .then(data => setAspirantes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  //para limitar los aspirantes a mostrar en el home //
  const aspirantesParaRenderizar = aspirantes.slice(0, 6);

  return (
    <div className="bg-cyan-900">
      <div className="text-center mb-8">
        <h1 className='text-2x1 font-bold'>Nuestros Postulantes</h1>
      </div>
      <div className='bg-blue-400 grid grid-cols-1 space-y-5 py-5 sm:grid-cols-4'>
        {aspirantesParaRenderizar.map(aspirante => (
          <div className='bg-gray-50 mx-5 sm:my-5' key={aspirante.id}>
            <CardAspirante
              key={aspirante.id}
              id={aspirante.id}
              nombre={aspirante.Nombre}
              profesion={aspirante.descripcion}
              // descripcion={aspirante.descripcion} Corregi aca
              descripcion={aspirante.Email}
              imagen={aspirante.Imagen}
            />
          </div>
        ))}

      </div>

      <div className='text-center mb-4'>
        <h2 className=' text-2xl font-bold'>Profesiones</h2>
      </div>
      <ListadoProfesiones />
    </div>
  );
}