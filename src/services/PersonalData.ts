import Generic from './Store';

export const PersonalData = () => {
  try {
    const data = Generic.getAll('Employee');

    return data;
  } catch (error) {
    console.log('Erro ao buscar todos Employee');
  }
};
