import { Box, Text, useStdout } from 'ink';
import React from 'react';
import { useTheme } from '../theme.js';

export function Divider({ title }) {
  const theme = useTheme();
  const { stdout } = useStdout();
  const cols = stdout?.columns ?? 80;
  const width = Math.min(Math.max(cols, 40), 100);
  const rightWidth = Math.max(width - title.length - 6, 3);

  return (
    <Box marginTop={1}>
      <Text dimColor>── </Text>
      <Text bold color={theme.accent}>
        {title}
      </Text>
      <Text dimColor> {'─'.repeat(rightWidth)}</Text>
    </Box>
  );
}
