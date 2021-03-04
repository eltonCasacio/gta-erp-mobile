import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 25px;
  background-color: #fff;
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
