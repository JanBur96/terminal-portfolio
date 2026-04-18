import { Box } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { Divider } from '../components/Divider.jsx';
import { Field } from '../components/Field.jsx';

const keys = [
  { label: '↑ ↓', value: 'Navigate the menu' },
  { label: '↵', value: 'Select' },
  { label: 'ESC', value: 'Go back one screen' },
  { label: '?', value: 'Toggle this help' },
  { label: 't', value: 'Cycle theme (rainbow / matrix / amber)' },
  { label: 'q', value: 'Quit' },
];

export function Help() {
  return (
    <ContainerBox>
      <Divider title="Keybindings" />
      <Box flexDirection="column" paddingLeft={2} marginTop={1}>
        {keys.map((k) => (
          <Field key={k.label} labelWidth={6} label={k.label} value={k.value} />
        ))}
      </Box>
    </ContainerBox>
  );
}
