import { Box } from 'ink';
import React from 'react';

export function ContainerBox({ children }) {
  return (
    <Box marginTop={1} paddingLeft={1}>
      {children}
    </Box>
  );
}
