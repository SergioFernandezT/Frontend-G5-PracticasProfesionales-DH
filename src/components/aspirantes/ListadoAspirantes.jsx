import './ListadoAspirantes.css'
import CardAspirante from './CardAspirante'
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const itemsPerPage = 10;

function ListadoAspirantes() {
  const [aspirantes, setAspirantes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3737/api/aspirantes`)
      .then(response => response.json())
      .then(data => setAspirantes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const totalPages = Math.ceil(aspirantes.length / itemsPerPage);
  const startIndex = (currentPage - 1 ) * itemsPerPage;
  const currentItems = aspirantes.slice(startIndex, startIndex + itemsPerPage); 
  
  const handlePreviousPage = () => {
    if (currentPage > 1 ) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1 );
    }
  };

  if (!aspirantes.length) return <p>Loading...</p>
  else {
    return (
      <div className="w-screen flex flex-col min-h-[100dvh]">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 rounded-md">
          <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Conozca a nuestros candidatos de desarrollo web
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Descubra personas talentosas listas para unirse a su equipo y darle vida a sus proyectos web.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
            {/* Listado de aspirantes */}
            {currentItems.map(aspirante => {
              return (
                <CardAspirante
                  key={aspirante.id}
                  id={aspirante.id}
                  nombre = {aspirante.nombre}
                  profesion={aspirante.profesiones_de_aspirante.profesion}
                  descripcion={aspirante.descripcion}
                  imagen={aspirante.imagen} />)
            })}
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
            
    )
  }
 }

export default ListadoAspirantes