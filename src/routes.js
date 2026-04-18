import { Welcome } from './screens/Welcome.jsx';
import { Navigation } from './screens/Navigation.jsx';
import { About } from './screens/About.jsx';
import { Projects } from './screens/Projects.jsx';
import { Skills } from './screens/Skills.jsx';
import { Fetch } from './screens/Fetch.jsx';
import { Contact } from './screens/Contact.jsx';
import { Help } from './screens/Help.jsx';

export const SCREENS = {
  welcome: Welcome,
  navigation: Navigation,
  about: About,
  projects: Projects,
  skills: Skills,
  fetch: Fetch,
  contact: Contact,
  help: Help,
};

export const HINTS = {
  welcome: null,
  navigation: '↑↓ navigate · ↵ select · ? help · q quit',
  help: 'ESC back',
};

export const DEFAULT_HINT = 'ESC back · ? help · q quit';
