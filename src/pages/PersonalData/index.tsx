import React, {useEffect, useState} from 'react';
import * as S from './styles';

import Rodape from '../../components/Rodape';
import {getPersonalData} from '../../services/personalData';

type PersonalDataProps = {
  navigation: any;
};

const PersonalData = ({navigation}: PersonalDataProps) => {
  const [employee, setEmployee] = useState({});

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
          <S.Text>{employee.Nome}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>RA</S.Label>
          <S.Text>{employee.id}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>Admissão</S.Label>
          <S.Text>{employee.Admissao}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>E-mail</S.Label>
          <S.Text>{employee.email}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>Contato</S.Label>
          <S.Text>{employee.Celular}</S.Text>
        </S.GroupInfo>

        <S.GroupInfo>
          <S.Label>Cargo</S.Label>
          <S.Text>{employee.funcoe}</S.Text>
        </S.GroupInfo>
      </S.InfoWrapper>
      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default PersonalData;
