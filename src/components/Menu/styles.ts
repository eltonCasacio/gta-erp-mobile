import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${Theme.Spacings.small};
  background-color: ${Theme.Colors.secondary};
`;

export const Text = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.small};
  text-align: center;
`;
