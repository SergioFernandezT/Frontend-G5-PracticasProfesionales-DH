import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ListadoAspirantes from './components/aspirantes/ListadoAspirantes';
import ListadoProfesiones from './components/profesiones/ListadoProfesiones'; // Añadir ruta para ListadoProfesiones
import CrearProfesion from './components/profesiones/CrearProfesion'; // Añadir ruta para CrearProfesion
import ModificarProfesion from './components/profesiones/ModificarProfesion'; // Añadir ruta para ModificarProfesion

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aspirantes" element={<ListadoAspirantes />} />
        <Route path="/profesiones" element={<ListadoProfesiones />} />
        <Route path="/profesiones/crear" element={<CrearProfesion />} />
        <Route path="/profesiones/modificar" element={<ModificarProfesion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
