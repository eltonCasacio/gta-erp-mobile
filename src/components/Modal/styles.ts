import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height - 5};
  margin: -5px;
  padding: 20px;
  padding-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${Theme.Colors.white};
`;

export const IconWrapper = styled.View`
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`;
