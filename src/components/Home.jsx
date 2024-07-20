import React, {useEffect, useState} from 'react'
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

 //para limitar los aspirantes a mostrar//}
  const aspirantesParaRenderizar = aspirantes.slice(0, 6);

  return (
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-centre mb-8">
     <h1 className='text-2x1 font-bold'>Aspirantes</h1>
    </div>
    <div className='flex mt-5 gap-4 flex-wrap justify-centre'>
      {aspirantesParaRenderizar.map(aspirante => (
        <div className='flex justify-around mb-8'>
        <CardAspirante
        key={aspirante.id}
        id={aspirante.id}
        nombre = {aspirante.Nombre}
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
         <ListadoProfesiones/>
    </div>
  );
}
