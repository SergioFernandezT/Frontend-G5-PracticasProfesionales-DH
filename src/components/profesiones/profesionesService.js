import axios from 'axios';

const API_URL = 'http://localhost:5173/api/profesiones';

const getAllProfesiones = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const createProfesion = async (profesion) => {
    const response = await axios.post(API_URL, profesion);
    return response.data;
};

const deleteProfesion = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

const updateProfesion = async (id, profesion) => {
    const response = await axios.put(`${API_URL}/${id}`, profesion);
    return response.data;
};

const getProfesionById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export { getAllProfesiones, createProfesion, deleteProfesion, updateProfesion, getProfesionById };
