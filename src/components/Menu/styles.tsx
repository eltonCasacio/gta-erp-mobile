import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const ScrollNavigator = styled.ScrollView``;

export const NavigatorContent = styled.View``;

export const ViewNavigator = styled.View`
  flex-direction: row;
`;

export const NavigatorBox = styled.TouchableOpacity`
  background-color: ${Theme.Colors.secondary};
  height: 90px;
  width: 80px;
  margin: ${Theme.Spacings.small};
  padding: ${Theme.Spacings.small};
  border-radius: ${Theme.Spacings.small};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.medium};
  text-align: center;
`;
