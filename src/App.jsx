import './App.css'
import { Routes, Route, redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SearchBar from './components/SearchBar';
import ListadoAspirantes from './components/aspirantes/ListadoAspirantes';
import FilterListadoAspirantes from './components/aspirantes/FilterListadoAspirantes';
import Login from './components/Login';
import Register from './components/Register';
import DetailAspirante from './components/aspirantes/DetailAspirante';
import ListadoProfesiones from './components/profesiones/ListadoProfesiones';
import CrearProfesion from './components/profesiones/CrearProfesion';
import ModificarProfesion from './components/profesiones/ModificarProfesion';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/aspirantes" element={<><SearchBar /><ListadoAspirantes /></>} />
        <Route path="/aspirantes/buscar/:keywords" element={<><SearchBar /><FilterListadoAspirantes /></>} />
        <Route path="/aspirantes/name/:name" element={<><SearchBar /><FilterListadoAspirantes /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aspirantes/:id" element={<DetailAspirante />} />
        <Route path="/profesiones" element={<ListadoProfesiones />} />
        <Route path="/profesiones/crear-profesion" element={<CrearProfesion />} />
        <Route path="/profesiones/modificar-profesion/:id" element={<ModificarProfesion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
