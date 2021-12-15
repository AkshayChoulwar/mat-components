import React from 'react';
import { ButtonProps } from '../../../utils/ButtonUtility';
import { StyledButton } from './StyledButton';

export const Button = ({
  children,
  isDisabled = false,
  ...rest
}: ButtonProps) => (
  <StyledButton disabled={isDisabled} {...rest}>
    {children}
  </StyledButton>
);
