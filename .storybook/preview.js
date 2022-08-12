export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        }
      ]
    },
    layout: 'fullscreen',
  },
}
