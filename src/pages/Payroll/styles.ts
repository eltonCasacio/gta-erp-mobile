import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const CardWrapper = styled.ScrollView`
  margin-top: ${Theme.Spacings.medium};
`;

export const ButtonWrapper = styled.View`
  align-self: center;
  margin: ${Theme.Spacings.great} 0;
`;
