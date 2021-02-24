import styled from 'styled-components/native';
import Theme from './Theme';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${Theme.Colors.primary};
  padding: ${Theme.Spacings.small};
`;

export const Container = styled.View`
  flex: 1;
  padding: ${Theme.Spacings.small};
`;

export const RodapeWrapper = styled.View`
  padding: ${Theme.Spacings.small};
`;
