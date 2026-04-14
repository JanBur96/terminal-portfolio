import { Box } from 'ink';
import { useState } from 'react';
import { Welcome } from './screens/Welcome';
import React from 'react';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  //   const { exit } = useApp();

  //   useInput((input) => {
  //     if (input === 'q') exit();
  //   });

  return (
    <Box flexDirection="column" padding={1}>
      {screen === 'welcome' && <Welcome />}
    </Box>
  );
}
