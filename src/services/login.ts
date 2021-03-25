import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AUTHORIZATION from '../graphql/queries/AUTHORIZATION';
import {actionLink} from '../utils/MyLink';

export const auth = async (user: string, password: string) => {
  if (!user || !password) {
    let username = user ? '' : 'Usuário';
    let pwd = password ? '' : 'Senha';
    throw 'Preencha o campo '.concat(username + ' ' + pwd);
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
  const celNumber = '19971196825';

  const url = `https://api.whatsapp.com/send?phone=55${celNumber}&text=solicito uma nova senha ${
    username ? ', para o usuário ' + username : ''
  }`;

  try {
    actionLink(url);
  } catch (error) {
    throw error;
  }
};

export const resetPasswordSendEmail = (user: string) => {
  if (!user) {
    return 'Preencha o campo usuário';
  }

  return 'Uma nova senha foi enviada para seu e-mail';
};
