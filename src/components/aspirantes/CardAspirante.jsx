import { Card, CardContent, CardHeader } from "./card/Card"
import { Avatar, AvatarImage } from "./avatar/Avatar"
import { Link } from "react-router-dom" 

function CardAspirante({id,nombre,profesion,imagen,descripcion}) {
  return (
    <Card className="w-full">
      <CardHeader className="h-32 bg-gray-400 rounded-t-lg">
        {/* Imagen de portada del aspirante*/}
        <img src={imagen} alt="" />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-3 mt-2">
          {/* Avatar del aspirante*/}
          <Avatar>
            <AvatarImage src="" />
          </Avatar>
          <div>
            {/* Nombre y profesion del aspirante*/}
            <h3 className="text-lg font-medium text-start"> {nombre}</h3>
            <p className="text-sm">{profesion}</p>
          </div>
        </div>
        <p className="text-sm text-start">
          {/* Descripcion del aspirante*/}
          {descripcion}
        </p>
        <div className="flex justify-end">
          {/* Boton para ver perfil del aspirante*/}
          <Link to={`/aspirantes/${id}`}
            
            className="bg-blue-500 inline-flex h-8 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 pointer-events-auto disabled:opacity-50"
          >
            Ver perfil
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardAspirante