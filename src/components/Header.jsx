import {Link} from 'react-router-dom'
function Header() {
    return (
    <header className="bg-gray-60 flex justify-between intem-center p-4 shadow-md">
    <div className="flex items-center">
        <Link to="/">
            <img src="./src/assets/img/logo-dh.png" alt="logo" className="h-11 mr-2" />
        </Link>
        <span className="font-bold text-lg"> Digital House</span>
    </div>
    
    <nav className="flex space-x-6 ">
    {/* <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Empresa</Link> */}
        <Link to="/aspirantes" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Aspirantes</Link>
        <Link to="/profesiones" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Profesiones</Link>
    </nav>
    <div className="flex space-x-4">
        <a href="#"><i className="fa fa-user"aria-hidden="true" ></i></a>
        <Link to="/register"><i className="fa fa-user-plus" aria-hidden="true"></i></Link>
    </div>
    </header>)
}

export default Header