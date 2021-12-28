import styled, { css } from 'styled-components';
import { ButtonProps } from '../../../utils/ButtonUtility';

// Contained button styles.
const ContainedButton = css`
  background-color: red;
  color: white;
`;

// Outlined button styles.
const OutlinedButton = css`
  border: 1px solid;
`;

export const StyledButton = styled('button')<ButtonProps>`
  border: none;
  border-radius: 2px;
  background: none;
  cursor: pointer;
  padding: 1em;

  ${(props) => props.variant === 'contained' && ContainedButton}
  ${(props) => props.variant === 'outlined' && OutlinedButton}
`;
