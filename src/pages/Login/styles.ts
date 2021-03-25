import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 15px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const ForgotPassword = styled.Text`
  align-self: center;
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.great};
  margin: 15px 0 20px 0;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: ${Theme.Font.medium};
`;

export const LabelWrapper = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  margin-bottom: ${Theme.Spacings.medium};
`;

export const Label = styled.Text`
  font-size: ${Theme.Font.medium};
  color: ${Theme.Colors.white};
  margin-right: ${Theme.Spacings.medium};
`;
