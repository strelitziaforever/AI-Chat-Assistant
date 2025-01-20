// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10a37f',
    },
    background: {
      default: '#343541',
      paper: '#202123',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          transition: 'width 0.3s ease-in-out',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease',
        },
      },
    },
  },
});

export default theme;