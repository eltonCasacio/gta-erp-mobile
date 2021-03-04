import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  margin: ${Theme.Spacings.medium} 0;
  padding: ${Theme.Spacings.medium};
  background-color: ${Theme.Colors.white};
`;

export const Text = styled.Text`
  color: ${Theme.Colors.grayBold};
  font-size: ${Theme.Font.great};
`;

export const Label = styled.Text`
  color: ${Theme.Colors.secondary};
  font-size: ${Theme.Font.great};
`;

export const GroupInfo = styled.View`
  justify-content: space-between;
  margin: 7px 0;
`;
