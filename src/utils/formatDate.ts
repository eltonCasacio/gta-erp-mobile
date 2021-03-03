export const FormatDate = (date = new Date()) => {
  let dia = String(date.getDate());
  dia = Number(dia) < 10 ? '0' + dia : dia;

  let mes = String(date.getMonth() + 1);
  mes = Number(mes) < 10 ? '0' + mes : mes;

  const ano = String(date.getFullYear());
  return ano.concat('-', mes, '-', dia);
}
