import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ListadoAspirantes from './components/aspirantes/ListadoAspirantes';
import Login from './components/Login';
import Register from './components/Register';
import DetailAspirante from './components/aspirantes/DetailAspirante';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aspirantes" element={<ListadoAspirantes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aspirantes/id" element={<DetailAspirante />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
