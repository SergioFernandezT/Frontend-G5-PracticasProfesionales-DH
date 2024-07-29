import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAspiranteById,
  updateAspirante,
} from "../servicios/aspirantesService";
import { getAllProfesiones } from "../servicios/profesionesService";

function AspiranteDetail() {
  const { id } = useParams();
  const [aspirante, setAspirante] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [profesiones, setProfesiones] = useState([]);
  const [imageFile, setImageFile] = useState(null); // Nuevo estado para la imagen

  useEffect(() => {
    // Fetch aspirante data using the service function
    getAspiranteById(id)
      .then((data) => {
        setAspirante(data);
        setFormData(data); // Initialize form data with aspirante data
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  useEffect(() => {
    const fetchProfesiones = async () => {
      try {
        const data = await getAllProfesiones();
        setProfesiones(data);
      } catch (error) {
        console.error("Error al cargar las profesiones", error);
      }
    };

    fetchProfesiones();
  }, []);

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    var base64String = 'Noimage'
    reader.onload = (e) => {
      base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setImageFile(`data:${files[0].type};base64,${base64String}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    delete formData.profesiones_de_aspirante
    if (imageFile) {
      formData.imagen = imageFile;
    }

    updateAspirante(id, formData)
      .then((updatedData) => {
        setAspirante(updatedData);
        setIsEditing(false); // Exit edit mode after successful update
      })
      .catch((error) => console.error("Error updating aspirante:", error));
  };

  if (!aspirante) {
    return <div>Loading...</div>;
  }

  if (localStorage.id == id) {
    return (
      <div className="p-4 h-auto md:min-h-dvh w-full flex flex-col gap-4 md:items-start">
        <div className="w-full px-3 pb-3 border-b-2 flex flex-col sm:flex-row items-center justify-between">
          <img
            src={aspirante.imagen || "default_cover_img_url"}
            alt={`${aspirante.nombre} ${aspirante.apellido}'s cover`}
            className="bg-gray-200 w-52 h-52 object-cover rounded-lg"
          />
          <div className="w-[75%] p-4">
            <div className="flex flex-col items-center md:items-start py-2 mb-4">
              <h2 className="text-2xl font-semibold">{`${aspirante.nombre} ${aspirante.apellido}`}</h2>
              <p className="text-gray-600 text-xl">
                {aspirante.profesion?.profesion || "Profesión Desconocida"}
              </p>
            </div>
            <div className="text-start text-xl mb-4">
              <p>{aspirante.descripcion}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around text-start text-xl h-80 w-full p-5 border shadow-sm rounded-lg">
          {!isEditing ? (
            <>
              <p>
                <strong className="font-bold">Email: </strong>
                {aspirante.email}
              </p>
              <p>
                <strong className="font-bold">Teléfono: </strong>{" "}
                {aspirante.telefono}
              </p>
              <p>
                <strong className="font-bold">LinkedIn: </strong>
                <a
                  href={aspirante.perfil_linkedin}
                  className="text-blue-500 hover:underline"
                >
                  {aspirante.perfil_linkedin}
                </a>
              </p>
              <p>
                <strong className="font-bold">Fecha de Nacimiento: </strong>
                {aspirante.fecha_nacimiento}
              </p>
              <p>
                <strong className="font-bold">Edad: </strong>
                {calculateAge(aspirante.fecha_nacimiento)}
              </p>
              <p>
                <strong className="font-bold">Sexo: </strong>
                {aspirante.sexo}
              </p>
            </>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block font-bold">Imagen:</label>
                <input
                  type="file"
                  name="imagen"
                  onChange={handleImageChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Apellido:</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Teléfono:</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">LinkedIn:</label>
                <input
                  type="url"
                  name="perfil_linkedin"
                  value={formData.perfil_linkedin || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Fecha de Nacimiento:</label>
                <input
                  type="date"
                  name="fecha_nacimiento"
                  value={formData.fecha_nacimiento || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Sexo:</label>
                <select
                  name="sexo"
                  value={formData.sexo || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccione...</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <select
                  id="profesion_id"
                  name="profesion_id"
                  value={formData.profesion_id}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Seleccione una Profesion</option>
                  {profesiones.map((profesion) => {
                    return (
                      <option key={profesion.id} value={profesion.id}>
                        {profesion.profesion}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
            </form>
          )}
          <button
            onClick={handleEditToggle}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {isEditing ? "Cancelar" : "Editar"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 h-auto md:min-h-dvh w-full flex flex-col gap-4 md:items-start">
      <div className="w-full px-3 pb-3 border-b-2 flex flex-col sm:flex-row items-center justify-between">
        <img
          src={aspirante.imagen || "default_cover_img_url"}
          alt={`${aspirante.nombre} ${aspirante.apellido}'s cover`}
          className="bg-gray-200 w-52 h-52 object-cover rounded-lg"
        />
        <div className="w-[75%] p-4">
          <div className="flex flex-col items-center md:items-start py-2 mb-4">
            <h2 className="text-2xl font-semibold">{`${aspirante.nombre} ${aspirante.apellido}`}</h2>
            <p className="text-gray-600 text-xl">{aspirante.profesion}</p>
          </div>
          <div className="text-start text-xl mb-4">
            <p>{aspirante.descripcion}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around text-start text-xl h-80 w-full p-5 border shadow-sm rounded-lg">
        <p>
          <strong className="font-bold">Email: </strong>
          {aspirante.email}
        </p>
        <p>
          <strong className="font-bold">Teléfono: </strong> {aspirante.telefono}
        </p>
        <p>
          <strong className="font-bold">LinkedIn: </strong>
          <a
            href={aspirante.perfil_linkedin}
            className="text-blue-500 hover:underline"
          >
            {aspirante.perfil_linkedin}
          </a>
        </p>
        <p>
          <strong className="font-bold">Fecha de Nacimiento: </strong>
          {aspirante.fecha_nacimiento}
        </p>
        <p>
          <strong className="font-bold">Edad: </strong>
          {calculateAge(aspirante.fecha_nacimiento)}
        </p>
        <p>
          <strong className="font-bold">Sexo: </strong>
          {aspirante.sexo}
        </p>
      </div>
    </div>
  );
}

export default AspiranteDetail;

