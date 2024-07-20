import React from 'react'
import CardAspirante from './aspirantes/CardAspirante'

import ListadoProfesiones from './profesiones/ListadoProfesiones'
export default function Home() {
  return (
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-centre mb-8">
        <h1 className='text-2x1 font-bold'>Aspirantes</h1>
      </div>
      <div className='flex mt-5 gap-4 flex-wrap justify-centre'>
        <div className='flex justify-around mb-8'>
          <CardAspirante/> 
        </div>
      </div>

      <div className='text-center mb-4'>
        <h2 className=' text-2xl font-bold'>Profesiones</h2>
      </div>
         <ListadoProfesiones/>
    </div>
  )
}
