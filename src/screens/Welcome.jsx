import { Box, Text, useInput } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';

export function Welcome({ setScreen }) {
  useInput((input) => {
    if (input) {
      setScreen('navigation');
    }
  });

  return (
    <Box flexDirection="column" alignItems="center">
      <Box flexDirection="column">
        <Gradient name="rainbow">
          <BigText font="tiny" text="Jan Burghardt" />
        </Gradient>
        <Text>Fullstack Developer · CPQ Specialist · Self-taugh</Text>
      </Box>
      <Box marginTop={1} marginBottom={1}>
        <Text>─────</Text>
      </Box>
      <Text dimColor>Press any key to continue...</Text>
    </Box>
  );
}
