import { Box, Text } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { Divider } from '../components/Divider.jsx';
import { Field } from '../components/Field.jsx';
import { skillCategories } from '../data/skills.js';

export function Skills() {
  return (
    <ContainerBox>
      <Box flexDirection="column">
        <Divider title="Skills" />
        <Box marginTop={1}>
          <Text dimColor>
            Technologies I work with professionally and personally.
          </Text>
        </Box>

        {skillCategories.map((c) => (
          <Box key={c.title} marginTop={1}>
            <Field
              icon={c.emoji}
              label={c.title}
              labelWidth={16}
              value={c.skills.join(' · ')}
            />
          </Box>
        ))}
      </Box>
    </ContainerBox>
  );
}
