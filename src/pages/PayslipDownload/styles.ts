import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const CardWrapper = styled.ScrollView`
  margin: ${Theme.Spacings.medium} 0;
`;

export const SearchWrapper = styled.View``;

export const PdfWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 25px;
  background-color: #fff;
`;
