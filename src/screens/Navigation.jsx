import React from 'react';
import SelectInput from 'ink-select-input';
import { Text } from 'ink';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { useTheme } from '../theme.js';

const items = [
  { label: '👤 About Me', value: 'about' },
  { label: '📦 Projects', value: 'projects' },
  { label: '🛠️ Skills', value: 'skills' },
  { label: '🌐 Fetch', value: 'fetch' },
  { label: '✉️ Contact', value: 'contact' },
];

export function Navigation({ navigate }) {
  const theme = useTheme();

  const Indicator = ({ isSelected }) => (
    <Text color={theme.accent}>{isSelected ? '❯ ' : '  '}</Text>
  );

  const Item = ({ isSelected, label }) => (
    <Text bold={isSelected} color={isSelected ? theme.accent : 'white'}>
      {label}
    </Text>
  );

  return (
    <ContainerBox>
      <SelectInput
        items={items}
        onSelect={(item) => navigate(item.value)}
        indicatorComponent={Indicator}
        itemComponent={Item}
      />
    </ContainerBox>
  );
}
