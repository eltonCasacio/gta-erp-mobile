import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Text = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.great};
`;
