import './ListadoAspirantes.css'
import CardAspirante from './CardAspirante'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FilterListadoAspirantes() {
  const { keywords, name } = useParams();
  const [aspirantes, setAspirantes] = useState([]);
  // const [waiting, setWaiting] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    let searchTerm = keywords || name;
    let searchType = keywords ? 'search' : 'name';
  //  setWaiting(true);
    fetch(`http://localhost:3737/api/aspirantes/${searchType}/${searchTerm}`)
      .then(response => {
        if (!response.ok){
          throw new Error('Network response was not ok');
        }
        return response.json();
  })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Data format is not correct');
        }
        setAspirantes(data);
        setError(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setAspirantes([]);
        setError(true);
  })
  //    .finally(() => setWaiting(false));
  }, [keywords, name]);
  //if (waiting) {
  if (error) {
    return <p className="text-4xl text-center p-20">No hay aspirantes con la descripción: {keywords}</p>;
  }
  if (aspirantes.length === 0) {
    return <p className="text-4xl text-center p-20">No hay aspirantes con la descripción: {keywords}</p>;
  }
  return (
      <div className="flex flex-col min-h-[100dvh]">

        <section>
          <h3 className="w-full my-3 text-3xl text-left">Aspirantes con la descripción: {keywords}</h3>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
            {/* Listado de aspirantes */}
            {aspirantes.map(aspirante => (
               <CardAspirante
                  key={aspirante.id}
                  id={aspirante.id}
                  nombre={aspirante.nombre}
                  profesion={aspirante.profesion}
                  // descripcion={aspirante.descripcion} Corregi aca
                  descripcion={aspirante.descripcion}
                  imagen={aspirante.imagen} />
            ))}
          </div>
        </section>
      </div>
    );
  }

