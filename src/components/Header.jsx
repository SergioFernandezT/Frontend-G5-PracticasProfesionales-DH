import { Link } from "react-router-dom"
import LogginFeatures from "./LogginFeatures"

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
            <LogginFeatures />
        </header>)
}

export default Header