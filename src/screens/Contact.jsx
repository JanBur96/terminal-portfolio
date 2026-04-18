import { Box, Text } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { Divider } from '../components/Divider.jsx';
import { Field } from '../components/Field.jsx';
import { profile } from '../data/profile.js';

export function Contact() {
  return (
    <ContainerBox>
      <Box flexDirection="column">
        <Divider title="Contact" />
        <Box marginTop={1}>
          <Text dimColor>Feel free to reach out — I don't bite.</Text>
        </Box>

        <Box flexDirection="column" marginTop={1}>
          {profile.contact.map((c) => (
            <Field key={c.label} labelWidth={12} {...c} />
          ))}
        </Box>

        <Box marginTop={1}>
          <Text dimColor>Links are clickable in supported terminals.</Text>
        </Box>
      </Box>
    </ContainerBox>
  );
}
