import React, {useEffect, useState} from 'react';
import * as S from './styles';

import Rodape from '../../components/Rodape';
import {getPersonalData} from '../../controllers/personalData';

type PersonalDataProps = {
  navigation: any;
};

type EmployeeProps = {
  Nome: String;
  id: String;
  Admissao: String;
  email: String;
  Celular: String;
  funcoe: String;
};

const PersonalData = ({navigation}: PersonalDataProps) => {
  const [employee, setEmployee] = useState<EmployeeProps>();

  useEffect(() => {
    getPersonalData()
      .then(({employees}) => setEmployee(employees[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.Text>Informações do usuario</S.Text>
        <S.GroupInfo>
          <S.Label>Nome</S.Label>
          <S.Text>{employee ? employee.Nome : ''}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>RA</S.Label>
          <S.Text>{employee ? employee.id : ''}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>Admissão</S.Label>
          <S.Text>{employee ? employee.Admissao : ''}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>E-mail</S.Label>
          <S.Text>{employee ? employee.email : ''}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>Contato</S.Label>
          <S.Text>{employee ? employee.Celular : ''}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>Cargo</S.Label>
          <S.Text>{employee ? employee.funcoe : ''}</S.Text>
        </S.GroupInfo>
      </S.InfoWrapper>
      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default PersonalData;
