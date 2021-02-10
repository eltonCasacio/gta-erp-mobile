import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const ScrollNavigator = styled.ScrollView`
  height: 120px;
`;

export const NavigatorContent = styled.View``;

export const ViewNavigator = styled.View`
  flex-direction: row;
  margin-left: ${Theme.Spacings.great};
`;

export const NavigatorBox = styled.TouchableOpacity`
  background-color: ${Theme.Colors.secondary};
  height: 100px;
  width: 90px;
  margin-right: ${Theme.Spacings.medium};
  border-radius: ${Theme.Spacings.small};
  padding: ${Theme.Spacings.medium};
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${Theme.Colors.white};
`;

export const Icon = styled.Image`
  height: ${({height}) => height};
  width: ${({width}) => width};
`;
