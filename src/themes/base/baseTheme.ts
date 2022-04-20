import { extendTheme } from '@chakra-ui/react';
import { button } from './components/button';

const baseTheme = extendTheme({
  styles: {
    globals: {
      div: {
        bg: 'red.500'
      },
      body: {
        bg: 'red.500'
      }
    },
  },
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
