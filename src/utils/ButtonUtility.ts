import React, { HTMLAttributes, ReactNode } from 'react';

type ButtonTypes = 'text' | 'outlined' | 'contained';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  /**
   * Button types particularly 'text', 'outlined' and 'contained'.
   */
  variant: ButtonTypes;

  /**
   * Disable state of button
   */
  isDisabled?: boolean;

  /**
   * If you want to apply your custom css propertes then pass the css key values in
   * the style object.
   */
  style?: React.CSSProperties;
}
