// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListadoProfesiones from './components/profesiones/ListadoProfesiones';
import CrearProfesion from './components/profesiones/CrearProfesion';
import ModificarProfesion from './components/profesiones/ModificarProfesion';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/profesiones" element={<ListadoProfesiones />} />
                <Route path="/profesiones/crear" element={<CrearProfesion />} />
                <Route path="/profesiones/modificar" element={<ModificarProfesion />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

