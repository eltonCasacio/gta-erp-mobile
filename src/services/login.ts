import api from './api';

export const Auth = async () => {
  console.log('Autenticando...');
  const {data} = await api.get('funcionarios/1');

  console.log(data);

  return true;
};
