import './ListadoAspirantes.css'
import CardAspirante from './CardAspirante'
function ListadoAspirantes() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
          {/* Reemplazar el Array por la lista de aspirantes de la BD */}
          {[...Array(12)].map((_, i) => (
            <CardAspirante key={i} i={i}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ListadoAspirantes