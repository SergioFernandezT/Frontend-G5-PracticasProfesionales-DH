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

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={handlePreviousPage}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              disabled={currentPage === 1}>
              Anterior
           </button>

           <button
             onClick={handleNextPage}
             className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
             disabled={currentPage === totalPages}>    
             Siguiente
           </button>

         </div>
         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    
            <div aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              <button
                onClick={handlePreviousPage}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === 1}
              >
                <span className="sr-only">Anterior</span>
                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${index + 1 === currentPage ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'} focus:z-20 focus:outline-offset-0`}>  
                {index + 1}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === totalPages}>   
                          
                <span className="sr-only">Siguiente</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              </div>
            </div>
            </div>
          </div>
        );
  }

