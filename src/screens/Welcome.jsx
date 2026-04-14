import { useInput } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';

export function Welcome({ onStart }) {
  useInput((input) => {
    if (input === 'q') exit();
  });

  return (
    <Gradient name="rainbow">
      <BigText align="center" font="tiny" text="Welcome to my Portfolio!" />
    </Gradient>
  );
}
