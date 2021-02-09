import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

type WrapperProps = {
  Dimension: Dimensions;
};

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  justify-content: space-around;
  height: ${Dimensions.get('window').height / 5};
`;

export const WrapperMenu = styled.View`
  width: ${Dimensions.get('window').width / 4.2};
`;
