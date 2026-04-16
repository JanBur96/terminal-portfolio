import { Box, Text } from 'ink';
import { useState } from 'react';
import { Welcome } from './screens/Welcome';
import React from 'react';
import { Navigation } from './screens/Navigation';
import Gradient from 'ink-gradient';
import { ContainerBox } from './components/ContainerBox';
import { Footer } from './components/Footer';
import { About } from './screens/About';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  //   const { exit } = useApp();

  //   useInput((input) => {
  //     if (input === 'q') exit();
  //   });

  return (
    <Box flexDirection="column">
      {screen === 'welcome' && <Welcome setScreen={setScreen} />}
      {screen !== 'welcome' && (
        <ContainerBox marginLeft={1} marginTop={1}>
          <Gradient name="rainbow">
            <Text bold>Jan Burghardt - Portfolio</Text>
          </Gradient>
        </ContainerBox>
      )}
      {screen === 'navigation' && <Navigation setScreen={setScreen} />}
      {screen === 'about' && <About setScreen={setScreen} />}
    </Box>
  );
}
