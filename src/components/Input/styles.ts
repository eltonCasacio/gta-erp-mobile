import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  width: 270px;
  background-color: ${Theme.Colors.white};
  border-radius: ${Theme.BorderRadios.small};
`;

export const Text = styled.TextInput`
  color: ${Theme.Colors.primary};
  font-size: ${Theme.Font.great};
`;
