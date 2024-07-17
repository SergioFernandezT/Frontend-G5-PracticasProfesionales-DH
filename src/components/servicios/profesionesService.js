import axios from 'axios';

const API_URL = 'http://localhost:3737/api/profesiones';

const getAllProfesiones = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getProfesionById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const createProfesion = async (data) => {
    const response = await axios.post(`${API_URL}/create`, data);
    return response.data;
};

const updateProfesion = async (id, data) => {
    const response = await axios.put(`${API_URL}/edit/${id}`, data);
    return response.data;
};

const deleteProfesion = async (id) => {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
};

export { getAllProfesiones, getProfesionById, createProfesion, updateProfesion, deleteProfesion };

