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
  flex-direction: row;
`;

export const InputHour = styled.TextInput`
  font-size: ${Theme.Font.great};
  padding: 3px ${Theme.Spacings.small};
  margin: 5px 2px;
  border-width: 1px;
  color: ${Theme.Colors.primary};
`;

export const ButtonWrapper = styled.View``;
