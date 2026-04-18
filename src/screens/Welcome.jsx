import { Box, Text, useInput } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';
import { useTheme } from '../theme.js';

const RESERVED = new Set(['q', '?', 't']);

export function Welcome({ navigate }) {
  const theme = useTheme();

  useInput((input, key) => {
    if (key.escape) return;
    if (RESERVED.has(input)) return;
    navigate('navigation');
  });

  return (
    <Box flexDirection="column" alignItems="center">
      <Box flexDirection="column">
        <Gradient {...theme.gradient}>
          <BigText font="tiny" text="Jan Burghardt" />
        </Gradient>
        <Text>Fullstack Developer · CPQ Specialist · Self-taught</Text>
      </Box>
      <Box marginTop={1} marginBottom={1}>
        <Text>─────</Text>
      </Box>
      <Text dimColor>Press any key to continue...</Text>
    </Box>
  );
}
