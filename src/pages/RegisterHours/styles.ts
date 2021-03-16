import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperTimeline = styled.View`
  width: 100%;
  background-color: ${Theme.Colors.white};
  align-items: center;

  padding: ${Theme.Spacings.medium} ${Theme.Spacings.great};
  margin-top: 15px;
  min-height: 160px;
  border-radius: ${Theme.BorderRadios.small};
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${Theme.Spacings.medium} 0;

  width: 100%;
`;

export const Card = styled.Text`
  color: ${Theme.Colors.grayBold};
  font-size: ${Theme.Font.medium};
`;

export const InfoDateTime = styled.View`
  margin-bottom: ${Theme.Spacings.medium};
`;
