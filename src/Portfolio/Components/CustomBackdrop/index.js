import { Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomBackdrop = withStyles({
  root: {
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    WebkitTapHighlightColor: 'transparent',
  },
  invisible: {
    backgroundColor: 'transparent',
  },
})(Backdrop);

export default CustomBackdrop;