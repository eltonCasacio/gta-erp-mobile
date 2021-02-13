import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-gta.herokuapp.com/',
});

export default instance;
