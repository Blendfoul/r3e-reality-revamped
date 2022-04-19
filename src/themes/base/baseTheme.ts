import { extendTheme } from '@chakra-ui/react';
import { button } from './components/button';

const baseTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: '#263238CC',
      },
      secondary: {
        default: '#2632387F',
      },
    },
  },
  components: {
    button,
  },
});

export { baseTheme };
