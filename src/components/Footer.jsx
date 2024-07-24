import React from 'react'
import iconFacebook from '../assets/img/facebook.svg'
import iconInstagram from '../assets/img/instagram.svg'
import iconLinkedin from '../assets/img/linkedin.svg'
import iconDH from '../assets/img/logo-dh.png'
function Footer() {
  return (
    <footer>
      <section className='flex justify-between font-serif text-slate-800 text-sm sm:text-base '>

        <div className=' bg-gray-300  md:py-2 w-1/3'>
          <h1>Portal de empleos</h1>
          <div className='flex justify-center  sm:py-5'><img src={iconDH} alt="logo de pagina" className='w-20 ' /></div>
        </div>
        <div className="bg-gray-200 w-1/3 px-2 md:py-2">
          <h2>¡Síguenos!</h2>
          <ul className="flex justify-between pt-2 sm:px-3 sm:py-5 md:px-10">
            <li className='cursor-pointer w-10 px-1 sm:px-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-300'><img src={iconFacebook} alt="iconFacebok" /></li>
            <li className='cursor-pointer w-10 px-1 sm:px-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-300'><img src={iconInstagram} alt="iconInstagram" /></li>
            <li className='cursor-pointer w-10 px-1 sm:px-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-300'><img src={iconLinkedin} alt="iconLinkedin" /></li>
          </ul>
        </div>
        <div className="bg-gray-300 w-1/3 items-center text-center  md:py-2">
          <ul className="text-xs sm:text-base">
            <li className=' cursor-pointer transition ease-in-out delay-150  hover:text-black'>Política de Privacidad</li>
            <li className=' cursor-pointer transition ease-in-out delay-150  hover:text-black'>Términos y Condiciones</li>
            <li className=' cursor-pointer transition ease-in-out delay-150  hover:text-black'>Ayuda</li>
            <li>@2024</li>
          </ul>
        </div>
      </section>

    </footer>
  )
}
export default Footer
