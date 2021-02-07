import styled from 'styled-components/native';
import Theme from './Theme';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${Theme.Colors.primary};
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
`;
