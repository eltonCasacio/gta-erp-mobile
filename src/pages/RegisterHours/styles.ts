import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  align-self: flex-start;
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.great};
`;

export const WrapperTimeline = styled.View`
  width: 100%;
  background-color: ${Theme.Colors.secondary};
  align-items: center;

  padding: 0 ${Theme.Spacings.great};
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
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.medium};
`;

export const InfoDateTime = styled.View`
  margin-bottom: ${Theme.Spacings.great};
`;
