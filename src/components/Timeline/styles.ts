import styled, {css} from 'styled-components/native';
import Theme from '../../styles/Theme';

export const Wrapper = styled.View`
  background-color: ${Theme.Colors.white};
  align-items: center;

  padding: 0 ${Theme.Spacings.great};
  min-height: 150px;
`;

export type TextProps = {
  checked: boolean;
};

export const Text = styled.Text<TextProps>`
  ${({checked}) => css`
    color: ${checked ? Theme.Colors.grayBold : Theme.Colors.gray};
    font-size: ${Theme.Font.medium};
  `}
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${Theme.Spacings.medium} 0;

  width: 100%;
`;
