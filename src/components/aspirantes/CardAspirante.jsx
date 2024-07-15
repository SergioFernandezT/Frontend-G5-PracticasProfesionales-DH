import { Card, CardContent, CardHeader } from "./card/Card"
import { Avatar, AvatarImage } from "./avatar/Avatar"
import { Link } from "react-router-dom" 

function CardAspirante({i, ...props }) {
  return (
    <Card className="w-full">
      <CardHeader className="h-32 bg-gray-400 rounded-t-lg">
        {/* Imagen de portada del aspirante*/}
        <img src="" alt="" />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-3 mt-2">
          {/* Avatar del aspirante*/}
          <Avatar>
            <AvatarImage src="" />
          </Avatar>
          <div>
            {/* Nombre y profesion del aspirante*/}
            <h3 className="text-lg font-medium text-start">Caty {i + 1}</h3>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>
        <p className="text-sm text-start">
          {/* Descripcion del aspirante*/}
          Desarrollador web experimentado con pasión por crear sitios web modernos y responsivos.
        </p>
        <div className="flex justify-end">
          {/* Boton para ver perfil del aspirante*/}
          <Link
            href="#"
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