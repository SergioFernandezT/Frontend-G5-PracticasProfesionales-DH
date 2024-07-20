export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col mx-auto max-w-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto h-12 w-12 text-red-500"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">404</h1>
        <p className="mt-4 text-xl">Vaya, la página que estás buscando no existe o no tienes permiso de acceder a ella.</p>
        <a href="/" className="bg-black rounded-md mt-6 p-2 text-white font-bold hover:bg-slate-800 transition">Vole a la pagina principal</a>
      </div>
    </div>
  )
}
