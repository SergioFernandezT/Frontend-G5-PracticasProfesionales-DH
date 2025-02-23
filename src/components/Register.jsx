import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProfesiones } from '../components/servicios/profesionesService';

function Register() {
  const navigate = useNavigate();
  if (localStorage.id) {
    useEffect(() => {
      navigate('/');
    }, [])
  } else {
    const [imagenUser, setImagenUser] = useState('')
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      dni: '',
      email: '',
      password: '',
      telefono: '',
      linkedin: '',
      fecha_nacimiento: '',
      profesion_id: '',
      descripcion: '',
      gender: '',
      role: '',
    });

    const [errors, setErrors] = useState({});

    const [profesiones, setProfesiones] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await getAllProfesiones();
        setProfesiones(result);
      };
      fetchData();
    }, []);

    const handleChange = (e) => {
      const { name, value, files } = e.target;

      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
      // Clear error on change
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    };

    const handleChangeImage = (e) => {
      const { files } = e.target;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      var base64String = 'Noimage'
      reader.onload = (e) => {
        base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        setImagenUser(`data:${files[0].type};base64,${base64String}`);
      }
    }

    // Validaciones de errores
    const validateForm = () => {
      const newErrors = {};

      if (!formData.nombre) newErrors.nombre = '*El nombre es obligatorio';
      if (!formData.apellido) newErrors.apellido = '*El apellido es obligatorio';
      if (!formData.email) newErrors.email = '*El email es obligatorio';
      if (!formData.telefono) newErrors.telefono = '*El teléfono es obligatorio';
      if (!formData.linkedin) newErrors.linkedin = '*El LinkedIn es obligatorio';
      if (!formData.fecha_nacimiento) newErrors.fecha_nacimiento = '*La fecha de nacimiento es obligatoria';
      if (!imagenUser) newErrors.image = '*La imagen es obligatoria';
      if (!formData.profesion_id) newErrors.profession_id = '*La profesión es obligatoria';
      if (!formData.gender) newErrors.gender = '*El género es obligatorio';
      if (!formData.role) newErrors.role = '*El rol es obligatorio';

      return newErrors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      formData.imagen = imagenUser
      const newErrors = validateForm();
      // Manejo de errores
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        alert(`Por favor ingrese datos válidos`);
      } else {
        try {
          const response = await fetch('http://localhost:3737/api/aspirantes/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.ok) {
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            navigate('/login'); // Redirige al usuario a la página de inicio de sesión
          } else {
            alert(`Error en el registro: ${data.message}`);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Hubo un error en el registro. Inténtalo de nuevo.');
        }
      }
    };
    return (
      <div
        className={`flex flex-col justify-center items-center p-4 space-y-6 bg-white
          }`}
      >
        <form className="flex flex-col gap-2 p-6 border shadow-md rounded-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center">Registrate</h2>
          <div className='flex  flex-row items-start my-5'>
            <section className='flex flex-col mx-5 h-full'>
              <h3>Datos Personales</h3>
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
              </div>
              <div>
                <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                  Dni
                </label>
                <input
                  id="dni"
                  name="dni"
                  type="number"
                  value={formData.dni}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
              </div>
              <div>
                <label htmlFor="fecha_nacimiento" className="block text-sm font-medium text-gray-700">
                  Fecha de nacimiento
                </label>
                <input
                  id="fecha_nacimiento"
                  name="fecha_nacimiento"
                  type="date"
                  value={formData.fecha_nacimiento}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.fecha_nacimiento && <p className="text-red-500 text-sm">{errors.fecha_nacimiento}</p>}
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Seleccionar Género</option>
                  <option value="masculino">Hombre</option>
                  <option value="femenino">Mujer</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>
            </section>
            <section className='flex flex-col h-fit'>
              <h3>Datos Profesionales</h3>
              <div>

                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="text"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
              </div>
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn URL
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Imagen de perfil
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
              </div>
              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                  Descripción
                </label>
                <input
                  id="descripcion"
                  name="descripcion"
                  type="text"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {/* {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion}</p>} */}
              </div>
              <div>
                <label htmlFor="profesion_id" className="block text-sm font-medium text-gray-700">
                  Profesión
                </label>
                <select
                  id="profesion_id"
                  name="profesion_id"
                  value={formData.profesion_id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Seleccione una Profesion</option>
                  {profesiones.map(profesion => {
                    return (
                      <option key={profesion.id} value={profesion.id}>
                        {profesion.profesion}
                      </option>
                    );
                  })}
                </select>
                {errors.profession && <p className="text-red-500 text-sm">{errors.profession}</p>}
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Rol
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Seleccione un rol</option>
                  <option value="aspirant">Aspirante</option>
                  <option value="contractor">Contratista</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
              </div>
            </section>
          </div>

          <div>
            <button
              type="submit"
              className="w-2/3 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrarme
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Register;
