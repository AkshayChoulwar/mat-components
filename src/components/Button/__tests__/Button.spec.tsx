import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../src/Button';

describe('Testing the new created button', () => {
  it('render the text button with the title', () => {
    render(<Button variant="text">Text Button</Button>);
    expect(screen.getAllByRole('button')).toBeDefined();
  });

  it('render the button with disabled and enabled state', () => {
    const { rerender } = render(
      <Button variant="outlined" isDisabled={true}>
        Outlined Button
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');

    rerender(
      <Button variant="outlined" isDisabled={false}>
        Outlined Button
      </Button>
    );
    expect(button).not.toHaveAttribute('disabled');
  });
});
