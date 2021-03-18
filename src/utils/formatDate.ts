export const FormatDate = (date = new Date()) => {
  let dia = String(date.getDate());
  dia = Number(dia) < 10 ? '0' + dia : dia;

  let mes = String(date.getMonth() + 1);
  mes = Number(mes) < 10 ? '0' + mes : mes;

  const ano = String(date.getFullYear());
  return ano.concat('-', mes, '-', dia);
};

export const FormatTime = () => {
  return new Date().toLocaleTimeString();
};

export const MesSeguinte = (data: string) => {
  let num = 0;
  num = Number(data.slice(5));
  if (num < 9) {
    let aux = Number(data.slice(5)) + 1;
    let newData = data.slice(0, 6).concat(String(aux));
    return newData;
  }

  if (num <= 11) {
    let aux = Number(data.slice(5)) + 1;
    let newData = data.slice(0, 5).concat(String(aux));
    return newData;
  }

  return data;
};
