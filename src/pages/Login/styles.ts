import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const ForgotPassword = styled.Text`
  align-self: center;
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.medium};
  margin-top: ${Theme.Spacings.medium};
`;

export const ErrorMessage = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.medium};
`;
