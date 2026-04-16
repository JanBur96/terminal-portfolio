import { Box, Text, useInput } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';

function Divider({ title }) {
  return (
    <Box marginTop={1}>
      <Text dimColor>── </Text>
      <Text bold color="cyan">
        {title}
      </Text>
      <Text dimColor> ──────────────────────</Text>
    </Box>
  );
}

function Field({ icon, label, value }) {
  return (
    <Text>
      {icon} <Text color="cyan">{label.padEnd(14)}</Text>
      <Text>{value}</Text>
    </Text>
  );
}

export function About({ setScreen }) {
  useInput((input, key) => {
    if (key.escape) {
      setScreen('navigation');
    }
  });

  return (
    <ContainerBox>
      <Divider title="About Me" />
      <Box marginTop={1} paddingLeft={2}>
        <Text>
          Self-taught developer. Started coding during the pandemic,{'\n'}
          now building enterprise CPQ solutions for numerous clients.{'\n'}
          Pursuing a CS degree alongside full-time work.
        </Text>
      </Box>

      <Divider title="Quick Facts" />
      <Box flexDirection="column" paddingLeft={2} marginTop={1}>
        <Field icon="🧑" label="Name" value="Jan-Philipp Burghardt" />
        <Field icon="📍" label="Location" value="NRW, Germany" />
        <Field icon="💼" label="Role" value="Developer @ Sybit GmbH" />
        <Field icon="⏳" label="Experience" value="6 years (self-taught)" />
        <Field icon="🎓" label="Education" value="CS degree (in progress)" />
      </Box>

      <Divider title="What I Do" />
      <Box flexDirection="column" paddingLeft={2} marginTop={1}>
        <Field
          icon="🎨"
          label="Frontend"
          value="Knockout.js, Vue, Angular, Svelte"
        />
        <Field
          icon="⚙️"
          label="Backend"
          value="IronPython, Java/Spring, Node/Express"
        />
        <Field
          icon="🔧"
          label="Focus"
          value="SAP CPQ, SAP Commerce, custom development for enterprise clients"
        />
        <Field
          icon="🛠️"
          label="Side"
          value="Self-hosted infra, personal dev & productivity tools, tinkering with new tech"
        />
      </Box>

      <Divider title="Beyond Code" />
      <Box flexDirection="column" paddingLeft={2} marginTop={1}>
        <Field
          icon="🏋️"
          label="Training"
          value="Lifting, PPL split, 4-6x/week"
        />
        <Field
          icon="🖥️"
          label="Private Projects"
          value="Self-Hosted Dev Tools, Home Server, etc."
        />
        <Field icon="🔒" label="Interests" value="Reading, Gaming, Family" />
      </Box>

      <Box marginTop={1}>
        <Text dimColor>ESC back</Text>
      </Box>
    </ContainerBox>
  );
}
