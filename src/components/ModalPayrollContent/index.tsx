import React from 'react';
import * as S from './styles';

type ModalPayrollContentProps = {
  selectedRegister: String[];
};

const ModalPayrollContent = ({selectedRegister}: ModalPayrollContentProps) => {
  return (
    <S.Wrapper>
      <S.InputHourScrollView>
        {selectedRegister.reverse().map((register, indice) => (
          <S.InputHourGroup key={indice}>
            <S.Text>{String(register.split('-')[0])}</S.Text>
            <S.Text>{String(register.split('-')[1])}</S.Text>
          </S.InputHourGroup>
        ))}
      </S.InputHourScrollView>
    </S.Wrapper>
  );
};

export default ModalPayrollContent;
