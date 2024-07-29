import React from 'react';
function Carrusel() {

    return (
             <div className='overflow-hidden'>
                
                <div className="flex animate-scroll opacity-80">
                    <img className='h-[300px] sm:h-[400px]' src="https://plus.unsplash.com/premium_photo-1683133725926-42fddb6e995b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen1" />
                    <img className='h-[300px] sm:h-[400px]' src="https://media.istockphoto.com/id/1480323436/es/foto/pareja-hablando-con-un-asesor-financiero-sobre-una-inversi%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=nHichG0-Ge5aqqLrV93BycAiM7mFRJ18XJew10_9MsQ=" alt="imagen2" />
                    <img className='h-[300px] sm:h-[400px]' src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen3" />
                    <img className='h-[300px] sm:h-[400px]' src="https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen4" />
                    <img className='h-[300px] sm:h-[400px]' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen5" />
                </div>
            </div> 
        
    )
}
export default Carrusel
