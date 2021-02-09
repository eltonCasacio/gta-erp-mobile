import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  background-color: ${Theme.Colors.white};
  border-radius: ${Theme.BorderRadios.small};
  margin: ${Theme.Spacings.small};
`;

export const Text = styled.TextInput`
  color: ${Theme.Colors.primary};
  font-size: ${Theme.Font.great};
  padding: ${Theme.Spacings.medium};
`;
