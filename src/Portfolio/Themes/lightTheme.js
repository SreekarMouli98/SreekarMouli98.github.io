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
      paper  : orange[50],
      default: orange[50],
      circularGradient: `radial-gradient(circle, ${orange[50]}, ${yellow[50]})`,
      topDownGradient: `linear-gradient(${orange[50]}, ${yellow[50]})`,
      bottomUpGradient: `linear-gradient(${yellow[50]}, ${orange[50]})`,
    },
    primary: {
      light: yellow[50],
      main : amber[50],
      dark : orange[50],
    },
    secondary: {
      light: blueGrey[800],
      main : blueGrey[900],
      dark : grey[900],
    }
  },
};