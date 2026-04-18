import { Box, Text } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { Divider } from '../components/Divider.jsx';
import { Field } from '../components/Field.jsx';
import { profile } from '../data/profile.js';

function Section({ title, items }) {
  return (
    <>
      <Divider title={title} />
      <Box flexDirection="column" paddingLeft={2} marginTop={1}>
        {items.map((f) => (
          <Field key={f.label} {...f} />
        ))}
      </Box>
    </>
  );
}

export function About() {
  return (
    <ContainerBox>
      <Divider title="About Me" />
      <Box marginTop={1} paddingLeft={2}>
        <Text>{profile.bio}</Text>
      </Box>

      <Section title="Quick Facts" items={profile.quickFacts} />
      <Section title="What I Do" items={profile.whatIDo} />
      <Section title="Interests" items={profile.interests} />
    </ContainerBox>
  );
}
