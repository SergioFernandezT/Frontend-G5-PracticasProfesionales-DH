function Experiencias(){
    return(
        
        <div className="flex justify-center items-center">
            <div className=" flex flex-col items-center w-3/4 space-y-8 md:px-10 py-16" >
                <div className="bg-slate-100 border-2 border-slate-200 rounded-sm p-1 shadow-2xl sm:flex h-1/2 md:justify-between">
                    <div className="h-1/2 sm:w-1/2 p-4">
                        <h1 className="text-2xl">Mi Experiencia</h1>
                        <h1>La aplicación para la gestión de aspirantes ha sido una herramienta increíblemente útil para nuestro equipo. La interfaz del frontend, construida con React y Tailwind CSS, es intuitiva y estéticamente agradable. La capacidad de realizar búsquedas avanzadas tanto por descripción como por nombre y apellido ha optimizado nuestro proceso de selección. Además, el backend en Node.js y Express proporciona una respuesta rápida y eficiente a nuestras consultas. Sin duda, esta herramienta ha mejorado nuestra eficiencia en la gestión de aspirantes y ha simplificado nuestro flujo de trabajo diario.
                        </h1>
                    </div>
                    <img className="overflow-hidden sm:w-72" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="experiencia1" />
                </div>
                <div className="bg-slate-100 border-2 border-slate-200 rounded-sm p-1 shadow-2xl sm:flex h-1/2 sm:justify-between">
                    <div className="h-1/2 sm:w-1/2 p-4">
                        <h1 className="text-2xl">Mi Experiencia</h1>
                        <h1>Como aspirante en busca de nuevas oportunidades, mi experiencia con esta aplicación ha sido realmente positiva. La interfaz es muy amigable y fácil de usar, lo que hizo que el proceso de postulación fuera rápido y sin complicaciones. Estoy agradecido por haber encontrado una oportunidad laboral a través de esta aplicación, y definitivamente la recomendaría a otros en busca de empleo.</h1>
                    </div>
                    <img className="overflow-hidden  sm:h-72" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="experiencia2" />
                </div>
            </div>
        </div>
    )
}

export default Experiencias