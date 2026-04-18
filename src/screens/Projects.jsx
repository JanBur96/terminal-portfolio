import { Box, Text } from 'ink';
import React from 'react';
import { ContainerBox } from '../components/ContainerBox.jsx';
import { Divider } from '../components/Divider.jsx';
import { projects } from '../data/projects.js';
import { useTheme } from '../theme.js';

function ProjectCard({ project }) {
  const theme = useTheme();
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box>
        <Text>┌ {project.emoji} </Text>
        <Text bold>{project.name.padEnd(24)}</Text>
        <Text color={project.statusColor}>{project.status}</Text>
      </Box>
      <Box>
        <Text>│ </Text>
        <Text dimColor>{project.description}</Text>
      </Box>
      <Box>
        <Text>│ </Text>
        <Text>{project.stack}</Text>
      </Box>
      <Box>
        <Text>└ </Text>
        <Text color={theme.accent}>{project.link}</Text>
      </Box>
    </Box>
  );
}

export function Projects() {
  return (
    <ContainerBox>
      <Box flexDirection="column">
        <Divider title="Projects" />
        <Box marginBottom={1} marginTop={1}>
          <Text dimColor>
            A selection of my work, from personal projects to enterprise
            solutions.
          </Text>
        </Box>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </Box>
    </ContainerBox>
  );
}
