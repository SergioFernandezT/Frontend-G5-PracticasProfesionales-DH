import './ListadoAspirantes.css'
import CardAspirante from './CardAspirante'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function FilterListadoAspirantes() {
  const { keywords } = useParams();
  const [aspirantes, setAspirantes] = useState();
  const [waiting, setWaiting] = useState();
  useEffect(() => {
    fetch(`http://localhost:3737/api/aspirantes/search/${keywords}`)
      .then(response => response.json())
      .then(data => setAspirantes(data))
      .catch(error => console.error('Error:', error))
      .finally(setWaiting(false))
  }, []);
  if (waiting) return <p className="text-4xl text-center p-20">Loading...</p>;
  if (aspirantes == "") return <p className="text-4xl text-center p-20">No hay aspirantes con la descripción: {keywords}</p>;
  if (aspirantes?.length > 0) {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        {/* <section className="w-full pt-12 md:pt-24 lg:pt-32 rounded-md">
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
        </section> */}
        <section>
          <h3 className="w-full my-3 text-3xl text-left">Aspirantes con la descripción: {keywords}</h3>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
            {/* Listado de aspirantes */}
            {aspirantes.map(aspirante => {
              return (
                <CardAspirante
                  key={aspirante.id}
                  id={aspirante.id}
                  nombre={aspirante.Nombre}
                  profesion={aspirante.Profesion}
                  // descripcion={aspirante.descripcion} Corregi aca
                  descripcion={aspirante.descripcion}
                  imagen={aspirante.Imagen} />)
            })}
          </div>
        </section>
      </div>
    )
  }
}
