import React from 'react'
import iconFacebook from '../assets/img/facebook.svg'
import iconInstagram from '../assets/img/instagram.svg'
import iconLinkedin from '../assets/img/linkedin.svg'
import iconDH from '../assets/img/logo-dh.png'
 function Footer() {
  return (
  <footer className=''>
    <section className='bg-white flex justify-between font-serif text-slate-800'>

      <div className=' bg-gray-300  py-3 w-1/3'>
         <h1>Portal de empleos</h1>
         <div class='flex justify-center py-5'><a href="https://www.digitalhouse.com/ar"><img src={iconDH} alt="logo de pagina" class='w-20 '/></a></div>
      </div>
      <div className="bg-gray-200 space-y-5 px-20 py-5 w-1/3"> 
        <h2>¡Síguenos!</h2>
        <ul className="flex justify-between ">
          <li className='w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-300'><a href="#"><img src={iconFacebook} alt="iconFacebok" /></a></li>
          <li className='w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-300'><a href="#"><img src={iconInstagram} alt="iconInstagram" /></a></li>
          <li className='w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:rounded hover:bg-gradient-to-r from-gray-200 to-blue-600/30 duration-300'><a href="#"><img src={iconLinkedin} alt="iconLinkedin" /></a></li>
        </ul>
      </div>
      <div className="bg-gray-300 items-center px-20 py-5 w-1/3">
      <ul class="Lista-final">
        <li><a className='transition ease-in-out delay-150  hover:text-black' href="#">Política de Privacidad</a></li>
        <li><a className='transition ease-in-out delay-150  hover:text-black' href="#">Términos y Condiciones</a></li>
        <li><a className='transition ease-in-out delay-150  hover:text-black' href="#">Ayuda</a></li>
        <li>@2024</li>
      </ul>
    </div>
    </section>
    
  </footer>
)}
export default Footer
