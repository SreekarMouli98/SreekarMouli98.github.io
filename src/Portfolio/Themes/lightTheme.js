import {
  amber,
  blue,
  indigo,
  lightBlue,
} from '@material-ui/core/colors'

export default {
  palette: {
    background: {
      defaultLight    : '#ffffff',
      default         : '#f2f2f2',
      defaultDark     : '#e6e6e6',
      circularGradient: `radial-gradient(circle at center, #f2f2f2 1%, #e6e6e6 550%)`,
      bottomUpGradient: `linear-gradient(transparent 10%, #f2f2f2 50%, #e6e6e6 100%)`,
      topDownGradient : `linear-gradient(#e6e6e6 30%, #f2f2f2 120%, transparent 100%)`,
    },
    primary: {
      light     : lightBlue[900],
      main      : blue[900],
      mainShadow: blue[100],
      dark      : indigo[900],
    },
    secondary: {
      light: amber[700],
      main : amber[800],
      dark : amber[900],
    },
    text: {
      primary: '#000000',
      hint   : '#000000E6',
    },
  },
};