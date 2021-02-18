import Exception from '../components/Excpetion';
import api from './api';

const getAll = async (endPont: string) => {
  try {
    return await api.get(endPont);
  } catch (error) {
    throw Exception();
  }
};

const getById = async (endPont: string, id: string) => {
  try {
    return await api.get(`${endPont}/${id}`);
  } catch (error) {
    throw Exception();
  }
};

const del = async (endPont: string) => {
  try {
    return await api.get(endPont);
  } catch (error) {
    throw Exception();
  }
};

export default {getAll, getById, del};
