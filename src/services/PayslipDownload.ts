import Generic from './Store';

export const getPayslip = () => {
  try {
    const data = Generic.getAll('payslip');

    return data;
  } catch (error) {
    console.log('Erro ao buscar todos payslip');
  }
};
