import {Linking} from 'react-native';

export const actionLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    throw `URL desconhecida: ${url}`;
  }
};
