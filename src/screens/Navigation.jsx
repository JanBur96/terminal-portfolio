import React from 'react';
import SelectInput from 'ink-select-input';
import { ContainerBox } from '../components/ContainerBox';
import { Text } from 'ink';
import { Footer } from '../components/Footer';

export function Navigation({ setScreen }) {
  const items = [
    { label: '👤 About Me', value: 'about' },
    { label: '📦 Projects', value: 'projects' },
    { label: '🛠️ Skills', value: 'skills' },
    { label: '🌐 Fetch', value: 'fetch' },
    { label: '✉️ Contact', value: 'contact' },
  ];

  const handleSelect = (item) => {
    setScreen(item.value);
  };

  const Indicator = ({ isSelected }) => (
    <Text color="cyan">{isSelected ? '❯ ' : '  '}</Text>
  );

  const Item = ({ isSelected, label }) => (
    <Text bold={isSelected} color={isSelected ? 'cyan' : 'white'}>
      {label}
    </Text>
  );

  return (
    <ContainerBox>
      <SelectInput
        items={items}
        onSelect={handleSelect}
        indicatorComponent={Indicator}
        itemComponent={Item}
      />
      <Footer>
        <Text color="dim">↑↓ navigate · enter select · q quit</Text>
      </Footer>
    </ContainerBox>
  );
}
