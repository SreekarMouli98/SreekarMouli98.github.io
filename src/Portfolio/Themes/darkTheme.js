import {
  amber,
  grey,
  lightBlue,
} from '@material-ui/core/colors'

export default {
  palette: {
    background: {
      defaultLight    : grey[900],
      default         : '#1a1a1a',
      defaultDark     : '#0d0d0d',
      circularGradient: `radial-gradient(circle at center, #1a1a1a 1%, #0d0d0d 550%)`,
      bottomUpGradient: `linear-gradient(transparent 10%, #1a1a1a 50%, #0d0d0d 100%)`,
      topDownGradient : `linear-gradient(#0d0d0d 30%, #1a1a1a 120%, transparent 100%)`,
    },
    primary: {
      light     : lightBlue[500],
      main      : lightBlue[500],
      mainShadow: lightBlue[900],
      dark      : lightBlue[600],
    },
    secondary: {
      light: amber[200],
      main : amber[300],
      dark : amber[400],
    },
    text: {
      primary: '#ffffff',
      hint   : '#ffffffE6',
    },
  },
};