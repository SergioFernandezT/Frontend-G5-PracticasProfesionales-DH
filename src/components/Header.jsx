import { Link } from "react-router-dom"

function Header() {
    return (
        <header className=" bg-slate-300 flex justify-between  sm:h-14 md:h-20 sm:p-2 shadow-md border-b-2 border-b-black">
            <div className="flex  sm:w-1/3 space-x-0.5  md:space-x-2 items-center">
                <Link to="/">
                    <img src="/src/assets/img/logo-dh.png" alt="logo" className="size-10 sm:w-20 md:w-40 md:h-16" />
                </Link>
                <span className="font-bold text-xs sm:text-lg pr-3">Digital House</span>
            </div>

            <nav className="flex sm:w-1/3 items-center justify-center space-x-0.5 sm:space-x-3">
                {/* <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Empresa</Link> */}
                <Link to="/aspirantes" className="rounded-md border-2 border-black text-sm font-semibold sm:text-lg text-black transition delay-200 hover:bg-black hover:opacity-95 hover:text-white duration-300 p-1 md:py-3 lg:px-10 md:px-5">Aspirantes</Link>
                <Link to="/profesiones" className="rounded-md  border-2 border-black text-sm font-semibold  sm:text-lg text-black transition delay-200 hover:bg-black hover:opacity-95  hover:text-white duration-300 p-1 md:py-3 lg:px-10 md:px-5">Profesiones</Link>
            </nav>
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

        </header>)
}

export default Header