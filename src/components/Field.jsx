import { Box, Text } from 'ink';
import Link from 'ink-link';
import React from 'react';
import { useTheme } from '../theme.js';

export function Field({
  icon,
  label,
  labelWidth = 14,
  value = '',
  url,
  status,
  statusColor = 'green',
}) {
  const theme = useTheme();
  const prefix = icon ? `${icon} ` : '';
  const labelNode = label ? (
    <Text color={theme.accent} bold>
      {label.padEnd(labelWidth)}
    </Text>
  ) : null;

  if (url) {
    return (
      <Box>
        <Text>
          {prefix}
          {labelNode}
        </Text>
        <Link url={url}>
          <Text>{value}</Text>
        </Link>
      </Box>
    );
  }

  return (
    <Text>
      {prefix}
      {labelNode}
      {value}
      {status ? <Text color={statusColor}>{`● ${status}`}</Text> : null}
    </Text>
  );
}
