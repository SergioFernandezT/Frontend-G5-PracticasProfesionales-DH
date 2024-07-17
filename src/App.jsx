import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ListadoAspirantes from './components/aspirantes/ListadoAspirantes';
import DetailAspirante from './components/aspirantes/DetailAspirante';
import ListadoProfesiones from './components/profesiones/ListadoProfesiones';
import CrearProfesion from './components/profesiones/CrearProfesion';
import ModificarProfesion from './components/profesiones/ModificarProfesion';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aspirantes" element={<ListadoAspirantes />} />
        <Route path="/aspirantes/id" element={<DetailAspirante />} />
        <Route path="/profesiones" element={<ListadoProfesiones />} />
        <Route path="/crear-profesion" element={<CrearProfesion />} />
        <Route path="/modificar-profesion/:id" element={<ModificarProfesion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
