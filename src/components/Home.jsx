import { useEffect, useState } from 'react'
import CardAspirante from './aspirantes/CardAspirante'
import Experiencias from './Experiencias'

export default function Home() {
  const [aspirantes, setAspirantes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3737/api/aspirantes`)
      .then(response => response.json())
      .then(data => setAspirantes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  //para limitar los aspirantes a mostrar en el home //
  const aspirantesParaRenderizar = aspirantes.slice(0, 8);

  return (
    <div className="bg-slate-200 pt-20 w-screen">
      <div className="text-center mb-8">
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>Nuestros Postulantes</h1>
      </div>
      <div className='bg-slate-200 grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {aspirantesParaRenderizar.map(aspirante => (
          <div className='bg-gray-50 m-2 rounded-lg sm:m-3' key={aspirante.id}>
            <CardAspirante
              key={aspirante.id}
              id={aspirante.id}
              nombre={aspirante.nombre}
              profesion={aspirante.profesiones_de_aspirante.profesion}
              descripcion={aspirante.descripcion}
              imagen={aspirante.imagen}
            />
          </div>
        ))}

      </div>
      <Experiencias />

    </div>
  );
}