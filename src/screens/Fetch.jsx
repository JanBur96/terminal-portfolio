import { Box, Text } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { Field } from '../components/Field.jsx';
import { profile } from '../data/profile.js';
import { useTheme } from '../theme.js';

const ascii = `
       ██╗██████╗
       ██║██╔══██╗
       ██║██████╔╝
  ██   ██║██╔══██╗
  ╚█████╔╝██████╔╝
   ╚════╝ ╚═════╝
  ┌──────────────┐
  │  ◉  ◉  ◉    │
  │              │
  │   > hello    │
  │   > world    │
  │              │
  └──────────────┘
      ╱────────╲
     ╱__________╲
`.trim();

function Separator() {
  return <Text dimColor>{'─'.repeat(40)}</Text>;
}

export function Fetch() {
  const theme = useTheme();
  const { fetch } = profile;
  const asciiLines = ascii.split('\n');

  return (
    <ContainerBox>
      <Box marginTop={1}>
        <Box flexDirection="column" marginRight={4}>
          {asciiLines.map((line, i) => (
            <Text key={i} color={theme.accent}>
              {line}
            </Text>
          ))}
        </Box>

        <Box flexDirection="column">
          <Text bold color={theme.accent}>
            {fetch.host}
          </Text>
          <Separator />
          {fetch.system.map((f) => (
            <Field key={f.label} label={f.label} value={f.value} />
          ))}
          <Separator />
          {fetch.identity.map((f) => (
            <Field key={f.label} label={f.label} value={f.value} />
          ))}
          <Separator />
          <Box marginTop={1}>
            <Text bold>{'  '}🖥️ Homelab Services</Text>
          </Box>
          <Box flexDirection="column" paddingLeft={2}>
            {fetch.homelab.map((s) => (
              <Field
                key={s.name}
                icon={s.icon}
                value={s.name.padEnd(18)}
                status={s.status}
              />
            ))}
          </Box>
          <Separator />
          {fetch.hobbies.map((f) => (
            <Field key={f.label} label={f.label} value={f.value} />
          ))}
          <Box marginTop={1}>
            <Text>{'██'}</Text>
            <Text color="red">{'██'}</Text>
            <Text color="green">{'██'}</Text>
            <Text color="yellow">{'██'}</Text>
            <Text color="blue">{'██'}</Text>
            <Text color="magenta">{'██'}</Text>
            <Text color="cyan">{'██'}</Text>
            <Text color="white">{'██'}</Text>
          </Box>
        </Box>
      </Box>
    </ContainerBox>
  );
}
