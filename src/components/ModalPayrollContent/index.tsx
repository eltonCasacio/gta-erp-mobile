import React from 'react';
import * as S from './styles';

import Button from '../Button';

type ModalPayrollContentProps = {
  handleSave: Function;
  payslipDate: string;
  payslip: {
    startJob: string;
    break: string;
    restartJob: string;
    finishedJob: string;
  };
};

const ModalPayrollContent = ({
  handleSave,
  payslipDate,
  payslip,
}: ModalPayrollContentProps) => {
  return (
    <S.Wrapper>
      <S.DateWrapper>{payslipDate}</S.DateWrapper>

      <S.InputHourScrollView>
        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>

        <S.InputHourGroup>
          <S.InputHour placeholder={payslip.startJob} />
          <S.InputHour placeholder={payslip.break} />
          <S.InputHour placeholder={payslip.restartJob} />
          <S.InputHour placeholder={payslip.finishedJob} />
        </S.InputHourGroup>
      </S.InputHourScrollView>

      <Button label="SALVAR" callback={handleSave} />
    </S.Wrapper>
  );
};

export default ModalPayrollContent;
