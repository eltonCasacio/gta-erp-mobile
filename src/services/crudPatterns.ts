import api from './api';

const getAll = async (endPont: string) => {
  try {
    return await api.get(endPont);
  } catch (error) {
    throw error;
  }
};

const getById = async (endPont: string, id: string) => {
  try {
    return await api.get(`${endPont}/${id}`);
  } catch (error) {
    throw error;
  }
};

const del = async (endPont: string) => {
  try {
    return await api.get(endPont);
  } catch (error) {
    throw error;
  }
};

export default {getAll, getById, del};
