import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  margin: ${Theme.Spacings.medium} 0;
  padding: ${Theme.Spacings.great};
  background-color: ${Theme.Colors.white};
  border-radius: ${Theme.Spacings.medium};
`;

export const Text = styled.Text`
  width: 100%;
  color: ${Theme.Colors.grayBold};
  font-size: ${Theme.Font.medium};
  text-align: left;
`;

export const Label = styled.Text`
  min-width: 100px;
  color: ${Theme.Colors.secondary};
  font-size: ${Theme.Font.great};
`;

export const GroupInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0;
`;
