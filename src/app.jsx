import React, { useState } from 'react';
import Gradient from 'ink-gradient';

import { Box, Text, useApp, useInput } from 'ink';
import { ContainerBox } from './components/ContainerBox.jsx';
import { DEFAULT_HINT, HINTS, SCREENS } from './routes.js';
import { THEME_NAMES, THEMES, ThemeContext } from './theme.js';

export default function App() {
  const [stack, setStack] = useState(['welcome']);
  const [themeIndex, setThemeIndex] = useState(0);
  const current = stack[stack.length - 1];
  const theme = THEMES[THEME_NAMES[themeIndex]];
  const { exit } = useApp();

  const navigate = (screen) =>
    setStack((s) => (s[s.length - 1] === screen ? s : [...s, screen]));
  const back = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));

  useInput((input, key) => {
    if (key.escape) {
      if (stack.length > 1) back();
      return;
    }
    if (input === 'q') {
      exit();
      return;
    }
    if (input === '?' && current !== 'help') {
      navigate('help');
      return;
    }
    if (input === 't') {
      setThemeIndex((i) => (i + 1) % THEME_NAMES.length);
    }
  });

  const Screen = SCREENS[current];
  const hint = current in HINTS ? HINTS[current] : DEFAULT_HINT;

  return (
    <ThemeContext.Provider value={theme}>
      <Box flexDirection="column">
        {current !== 'welcome' && (
          <ContainerBox>
            <Gradient {...theme.gradient}>
              <Text bold>Jan Burghardt - Portfolio</Text>
            </Gradient>
          </ContainerBox>
        )}

        <Screen navigate={navigate} back={back} />

        {hint && (
          <ContainerBox>
            <Text dimColor>{hint}</Text>
          </ContainerBox>
        )}
      </Box>
    </ThemeContext.Provider>
  );
}
