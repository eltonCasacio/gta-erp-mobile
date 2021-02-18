import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gta-erp-api.herokuapp.com/',
});

export default instance;
