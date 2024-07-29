import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
export default function LogginFeatures() {
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear()
        alert('Has cerrado sesión')
        navigate('/');
    }

    if (localStorage.id) {
        return (
            <div className="w-1/4 flex sm:w-1/3 items-center justify-center space-x-2 sm:justify-end sm:pr-6 sm:space-x-7 md:pr-10" >
                <Link to={`/aspirantes/${localStorage.id}`} className="flex flex-row">
                    <h4>Mi Perfil</h4>
                    <i className="fa-solid fa-user-gear p-1 hover:text-white  transition ease-in-out delay-150  sm:hover:scale-150 hover:rounded-full hover:bg-gradient-to-r h from-black to-gray-300 duration-800" aria-hidden="true" ></i>
                </Link>
                <button onClick={Logout}>Cerrar Sesión
                    <i className="fa-solid fa-user-xmark p-1 hover:text-white  transition ease-in-out delay-150 sm:hover:scale-150 hover:rounded-full hover:bg-gradient-to-r from-gray-300 to-black duration-800" aria-hidden="true"></i>
                </button>
            </div>)
    } else {
        return (
            <div className="w-1/4 flex sm:w-1/3 items-center justify-center space-x-2 sm:justify-end sm:pr-6 sm:space-x-7 md:pr-10" >
                <Link to={`/login/`}
                    className="">
                    <i className="fa fa-user p-1 hover:text-white  transition ease-in-out delay-150  sm:hover:scale-150 hover:rounded-full hover:bg-gradient-to-r h from-black to-gray-300 duration-800" aria-hidden="true" ></i>
                </Link>
                <Link to={`/register/`}
                    className="">
                    <i className="fa fa-user-plus p-1 hover:text-white  transition ease-in-out delay-150 sm:hover:scale-150 hover:rounded-full hover:bg-gradient-to-r from-gray-300 to-black duration-800" aria-hidden="true"></i>
                </Link>
            </div>
        )
    }
}
