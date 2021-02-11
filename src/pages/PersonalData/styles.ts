import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  margin: ${Theme.Spacings.medium} 0;
  background-color: ${Theme.Colors.white};
`;

export const Text = styled.Text`
  color: ${Theme.Colors.grayBold};
  font-size: ${Theme.Font.great};
  padding: ${Theme.Spacings.medium};
`;
