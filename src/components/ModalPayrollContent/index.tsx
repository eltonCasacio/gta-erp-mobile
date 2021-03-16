import React from 'react';
import * as S from './styles';

import Button from '../Button';

type ModalPayrollContentProps = {
  handleSave: Function;
  selectedRegister: String[];
};

const ModalPayrollContent = ({
  handleSave,
  selectedRegister,
}: ModalPayrollContentProps) => {
  return (
    <S.Wrapper>
      <S.InputHourScrollView>
        {selectedRegister.map((register, indice) => (
          <S.InputHourGroup key={indice}>
            <S.Text>{String(register.split('-')[0])}</S.Text>
            <S.Text>{String(register.split('-')[1])}</S.Text>
          </S.InputHourGroup>
        ))}
      </S.InputHourScrollView>

      <Button label="SALVAR" callback={handleSave} />
    </S.Wrapper>
  );
};

export default ModalPayrollContent;
