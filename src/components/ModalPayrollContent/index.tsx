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
  console.log('selectedRegister', selectedRegister);
  return (
    <S.Wrapper>
      {/* <S.DateWrapper>{selectedRegister[0]?.slice(0, 10)}</S.DateWrapper> */}

      <S.InputHourScrollView>
        {selectedRegister.map((register, indice) => (
          <S.InputHourGroup key={indice}>
            <S.InputHour placeholder={String(register)} />
          </S.InputHourGroup>
        ))}
      </S.InputHourScrollView>

      <Button label="SALVAR" callback={handleSave} />
    </S.Wrapper>
  );
};

export default ModalPayrollContent;
