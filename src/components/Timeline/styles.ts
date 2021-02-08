import styled, {css} from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  background-color: ${Theme.Colors.white};
  justify-content: space-around;
  align-items: center;
`;

export type TextProps = {
  checked: boolean;
};

export const Text = styled.Text<TextProps>`
  ${({checked}) => css`
    color: ${checked ? Theme.Colors.grayBold : Theme.Colors.gray};
    margin-left: ${Theme.Spacings.medium};
  `}
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  margin: ${Theme.Spacings.medium} 0;
`;
