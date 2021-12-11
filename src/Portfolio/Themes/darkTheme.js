import {
  amber,
  blueGrey,
  grey,
  orange,
  yellow,
} from '@material-ui/core/colors'

export default {
  palette: {
    background: {
      paper: grey[900],
      default: grey[900],
      circularGradient: `radial-gradient(circle, ${grey[900]}, ${blueGrey[900]})`,
      topDownGradient: `linear-gradient(${grey[900]}, ${blueGrey[900]})`,
      bottomUpGradient: `linear-gradient(${blueGrey[900]}, ${grey[900]})`,
    },
    primary: {
      light: blueGrey[800],
      main: blueGrey[900],
      dark: grey[900],
    },
    secondary: {
      light: yellow[50],
      main: amber[50],
      dark: orange[50],
    }
  },
};