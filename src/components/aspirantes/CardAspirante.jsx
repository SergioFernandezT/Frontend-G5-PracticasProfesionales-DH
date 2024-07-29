import { Card, CardContent, CardHeader } from "./card/Card";
import { Avatar, AvatarImage } from "./avatar/Avatar";
import { Link } from "react-router-dom";

function CardAspirante({ id, nombre, profesion, imagen, descripcion }) {
  return (
    <Card className="w-full transition ease-in-out delay-300 hover:scale-110 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-400">
      <CardHeader className="h-96 bg-gray-400 rounded-t-lg">
        <img src={imagen} alt={`${nombre}`} className="object-cover h-full w-full rounded-t-lg object-center" />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-3 mt-2">
          <Avatar>
            <AvatarImage src={imagen} alt={`${nombre}`} className="rounded-full" />
          </Avatar>
          <div>
            <h3 className="text-lg font-medium text-start">{nombre}</h3>
            <p className="text-sm text-gray-600">{profesion}</p>
          </div>
        </div>
        <p className="text-sm text-start text-gray-700">
          {descripcion}
        </p>
        <div className="flex justify-end">
          <Link
            to={`/aspirantes/${id}`}
            className="bg-blue-500 inline-flex h-8 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 pointer-events-auto disabled:opacity-50"
          >
            Ver perfil
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardAspirante;