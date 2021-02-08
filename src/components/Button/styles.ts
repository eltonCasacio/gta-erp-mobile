import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  align-items: center;
  width: 200px;
  border-radius: ${Theme.BorderRadios.great};
  background-color: ${Theme.Colors.secondary};
  padding: ${Theme.Spacings.medium} ${Theme.Spacings.great};
`;

export const Text = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.great};
`;
