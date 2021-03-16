import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const DateWrapper = styled.Text`
  font-size: ${Theme.Font.great};
  font-weight: bold;
`;

export const InputHourScrollView = styled.ScrollView`
  margin: ${Theme.Spacings.great} 0;
`;

export const InputHourGroup = styled.View`
  width: 81%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  margin-bottom: ${Theme.Spacings.great};
`;

export const Text = styled.Text`
  font-size: ${Theme.Font.medium};
  color: ${Theme.Colors.primary};
`;

export const ButtonWrapper = styled.View``;
