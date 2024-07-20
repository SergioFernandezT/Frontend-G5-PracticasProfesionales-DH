function Header() {
    return (
    <header className="bg-gray-60 flex justify-between intem-center p-4 shadow-md">
    <div className="flex items-center">
        <img src="./src/assets/img/logo-dh.png" alt="logo" className="h-11 mr-2" />
        <span className="font-bold text-lg"> Digital House</span>
    </div>

    <nav className="flex space-x-6 ">
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Empresas</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Aspirantes</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Profesiones</a>
    </nav>
    <div className="flex space-x-4">
        <a href="#"><i class="fa fa-user"aria-hidden="true" ></i></a>
        <a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i></a>
    </div>
    </header>)
}

export default Header