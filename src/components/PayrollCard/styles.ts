import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Theme.Colors.white};
  padding: ${Theme.Spacings.medium};
  margin-bottom: ${Theme.Spacings.small};
`;

export const Text = styled.Text`
  color: ${Theme.Colors.grayBold};
  font-size: ${Theme.Font.medium};
  border-radius: ${Theme.BorderRadios.small};
`;
