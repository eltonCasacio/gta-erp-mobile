import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  background-color: ${Theme.Colors.white};
  padding: ${Theme.Spacings.medium};
  margin: ${Theme.Spacings.small} 0;
  border-radius: ${Theme.BorderRadios.small};
  align-items: center;
`;

export const Text = styled.Text`
  color: ${Theme.Colors.grayBold};
  font-size: ${Theme.Font.great};
  border-radius: ${Theme.BorderRadios.small};
`;
