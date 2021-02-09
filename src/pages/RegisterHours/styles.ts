import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  align-self: flex-start;
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.great};
  margin-bottom: ${Theme.Spacings.small};
`;

export const TimelineContainer = styled.View`
  width: 100%;
  margin-bottom: ${Theme.Spacings.great};
`;

export const InfoDateTime = styled.View`
  margin-bottom: ${Theme.Spacings.great};
`;
