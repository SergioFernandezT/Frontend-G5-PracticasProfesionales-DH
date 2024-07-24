import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="bg-gray-600 flex justify-between  space-y-1 sm:p-2 shadow-md">
            <div className="flex items-center sm:w-1/3">
                <Link to="/">
                    <img src="/src/assets/img/logo-dh.png" alt="logo" className="h-11 sm:mr-2 sm:h-14" />
                </Link>
                <span className="font-bold text-xs sm:text-lg">Digital House</span>
            </div>

            <nav className="flex sm:space-x-4 sm:w-1/3 sm:justify-center sm:m-2">
                {/* <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Empresa</Link> */}
                <Link to="/aspirantes" className="rounded-md px-3 py-2 text-sm font-medium sm:p-3 sm:text-lg text-gray-300 transition delay-200 hover:bg-gray-700 hover:text-white duration-300">Aspirantes</Link>
                <Link to="/profesiones" className="rounded-md px-3 py-2 text-sm font-medium sm:p-3 sm:text-lg text-gray-300 transition delay-200 hover:bg-gray-700  hover:text-white duration-300">Profesiones</Link>
            </nav>
            <div className="w-1/4 flex justify-center space-x-3 pt-2 sm:w-1/3 sm:space-x-10 sm:justify-end sm:pt-4 sm:pr-10" >
                <Link to={`/login/`}
                    className="">
                    <i className="fa fa-user sm:w-7 sm:(transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded-sm hover:bg-gradient-to-r from-gray-600 to-gray-300 duration-300)" aria-hidden="true" ></i>
                </Link>

                <Link to={`/register/`}
                    className="">
                    <i className="fa fa-user-plus sm:w-7 sm:(transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded-sm hover:bg-gradient-to-r from-gray-600 to-gray-300 duration-300)" aria-hidden="true"></i>
                </Link>    
            </div>

        </header>)
}

export default Header