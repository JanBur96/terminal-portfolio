import { createContext, useContext } from 'react';

export const THEMES = {
  rainbow: {
    name: 'rainbow',
    accent: 'cyan',
    gradient: { name: 'rainbow' },
  },
  matrix: {
    name: 'matrix',
    accent: 'green',
    gradient: { colors: ['#00ff66', '#00aa33', '#005522'] },
  },
  amber: {
    name: 'amber',
    accent: 'yellow',
    gradient: { colors: ['#ffbf00', '#ff8800', '#ff5500'] },
  },
};

export const THEME_NAMES = ['rainbow', 'matrix', 'amber'];

export const ThemeContext = createContext(THEMES.rainbow);

export function useTheme() {
  return useContext(ThemeContext);
}
