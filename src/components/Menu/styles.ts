import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 85px;
  padding: ${Theme.Padding.small};
  background-color: ${Theme.Colors.secondary};
`;

export const Text = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.medium};
`;
