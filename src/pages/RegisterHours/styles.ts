import styled from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Theme.Spacings.great};
`;

export const Text = styled.Text`
  align-self: flex-start;
  color: ${Theme.Colors.white};
  font-size: ${Theme.Font.great};
`;

export const TimelineContainer = styled.View`
  width: 100%;
`;

export const InfoDateTime = styled.View`
  margin-bottom: ${Theme.Spacings.great};
`;
