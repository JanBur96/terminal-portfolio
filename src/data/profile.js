export const profile = {
  name: 'Jan-Philipp Burghardt',
  tagline: 'Fullstack Developer · CPQ Specialist · Self-taught',
  bio: [
    'Self-taught developer. Started coding during the pandemic,',
    'now building enterprise CPQ solutions for numerous clients.',
    'Pursuing a CS degree alongside full-time work.',
  ].join('\n'),

  quickFacts: [
    { icon: '🧑', label: 'Name', value: 'Jan-Philipp Burghardt' },
    { icon: '📍', label: 'Location', value: 'NRW, Germany' },
    { icon: '💼', label: 'Role', value: 'Developer @ Sybit GmbH' },
    { icon: '⏳', label: 'Experience', value: '6 years (self-taught)' },
    { icon: '🎓', label: 'Education', value: 'CS degree (in progress)' },
  ],

  whatIDo: [
    {
      icon: '🎨',
      label: 'Frontend',
      value: 'Knockout.js, Vue, Angular, Svelte',
    },
    {
      icon: '⚙️',
      label: 'Backend',
      value: 'IronPython, Java/Spring, Node/Express',
    },
    {
      icon: '🔧',
      label: 'Focus',
      value: 'SAP CPQ, SAP Commerce, custom development for enterprise clients',
    },
    {
      icon: '🛠️',
      label: 'Side',
      value:
        'Self-hosted infra, personal dev & productivity tools, tinkering with new tech',
    },
  ],

  interests: [
    { icon: '🏋️', label: 'Training', value: 'Lifting, PPL split, 4-6x/week' },
    {
      icon: '🖥️',
      label: 'Coding',
      value: 'Self-Hosted Dev Tools, Home Server, etc.',
    },
    { icon: '🔒', label: 'Interests', value: 'Reading, Gaming, Family' },
  ],

  contact: [
    {
      icon: '💻',
      label: 'GitHub',
      url: 'https://github.com/JanBur96',
      value: 'github.com/JanBur96',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/jan-philipp-burghardt/',
      value: 'linkedin.com/in/jan-philipp-burghardt/',
    },
    {
      icon: '🌐',
      label: 'Website',
      url: 'https://janburghardt.dev/contact',
      value: 'janburghardt.dev',
    },
  ],

  fetch: {
    host: 'jan@thinkcentre',
    system: [
      { label: 'OS', value: 'Ubuntu Server 24.04 LTS' },
      { label: 'Host', value: 'Lenovo ThinkCentre M720t' },
      { label: 'Memory', value: '24GB DDR4' },
      { label: 'Shell', value: 'Zsh' },
      { label: 'Editor', value: 'VS Code' },
    ],
    identity: [
      { label: 'Name', value: 'Jan-Philipp Burghardt' },
      { label: 'Role', value: 'CPQ Developer @ Sybit GmbH' },
      { label: 'Experience', value: '6 years (self-taught)' },
      { label: 'Education', value: 'B.Sc. Software Dev (in progress)' },
      { label: 'Location', value: 'NRW, Germany' },
      {
        label: 'Languages',
        value: '5 (JavaScript, TypeScript, Python, Java, C++)',
      },
      {
        label: 'Frameworks',
        value: '6 (React, Svelte, Vue, Angular, Express, Spring)',
      },
    ],
    homelab: [
      { icon: '🛡️', name: 'Pi-hole', status: 'filtering' },
      { icon: '🔐', name: 'Vaultwarden', status: 'secured' },
      { icon: '🎬', name: 'Jellyfin', status: 'streaming' },
      { icon: '🌐', name: 'WireGuard', status: 'tunneled' },
      { icon: '☁️', name: 'Cloudflare', status: 'proxied' },
      { icon: '📝', name: 'Notable', status: 'running' },
      { icon: '📡', name: 'Home Hub', status: 'running' },
    ],
    hobbies: [
      { label: 'Hobbies', value: 'Coding · Gym · Gaming' },
      { label: 'Training', value: 'PPL split · 4-6x/week' },
    ],
  },
};
