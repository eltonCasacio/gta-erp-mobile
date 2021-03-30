import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AUTHORIZATION from '../graphql/queries/AUTHORIZATION';
import GET_CELNUMBER from '../graphql/queries/GET_CELNUMBER';
import {actionLink} from '../utils/MyLink';

import axios from './axiosAPI';

export const auth = async (user: string, password: string) => {
  if (!user || !password) {
    let username = user ? '' : 'Usuário';
    let pwd = password ? '' : 'Senha';
    throw 'Preencha o campo '.concat(username + ' e ' + pwd);
  }

  await AsyncStorage.removeItem('token');

  try {
    const {data} = await client.mutate({
      mutation: AUTHORIZATION,
      variables: {
        user,
        password,
      },
    });
    AsyncStorage.setItem('token', data.login.jwt);
    AsyncStorage.setItem('user', user);

    return data;
  } catch (error) {
    throw 'Usuário não encontrado';
  }
};

export const resetPasswordByWhatsapp = async (username: string) => {
  try {
    const {data} = await client.query({
      query: GET_CELNUMBER,
    });

    if (data.configuracoes.length > 0) {
      let celNumber = data.configuracoes[0].Celular;

      const url = `https://api.whatsapp.com/send?phone=${celNumber}&text=solicito uma nova senha ${
        username ? ', para o usuário ' + username : ''
      }`;

      actionLink(url);
    }
  } catch (error) {
    throw error;
  }
};

export const resetPasswordSendEmail = async (user: string) => {
  if (!user) {
    return 'Preencha o campo usuário';
  }

  axios.post('password', {username: user}).then(({data}) => console.log(data));
  return 'Uma nova senha foi enviada para seu e-mail';
};
