import React from 'react';
import SelectInput from 'ink-select-input';
import { ContainerBox } from '../components/ContainerBox';

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

  return (
    <ContainerBox marginTop={1} paddingX={1}>
      <SelectInput items={items} onSelect={handleSelect} />
    </ContainerBox>
  );
}
