import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    headings: 'Roboto, Georgia, serif',
    mono: 'Roboto, Menlo, monospace',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
