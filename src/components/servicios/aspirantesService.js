import axios from 'axios';

const API_URL = 'http://localhost:3737/api/aspirantes';

const getAllAspirantes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getAspiranteById = async (id) => {
    const response = await axios.get(`${API_URL}/detail/${id}`);
    return response.data;
};

const createAspirante = async (data) => {
    const response = await axios.post(`${API_URL}/create`, data);
    return response.data;
};

const updateAspirante = async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/edit/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating aspirante:', error);
      throw error;
    }
  };

const deleteAspirante = async (id) => {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
};

const getSearchedAspirantes = async (data) => {
    const response = await axios.get(`${API_URL}/search`, data);
    return response.data;
};

// Nueva función para obtener la cantidad de aspirantes por profesión
const getAspirantesPorProfesion = async () => {
    try {
        const response = await axios.get(`${API_URL}/aspirantes-por-profesion`);
        return response.data;
    } catch (error) {
        console.error('Error fetching aspirantes por profesion:', error);
        throw error;
    }
};

export { getAllAspirantes, getAspiranteById, createAspirante, updateAspirante, deleteAspirante, getSearchedAspirantes, getAspirantesPorProfesion };

