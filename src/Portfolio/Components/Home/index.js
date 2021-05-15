import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../Context';

const HOME_CONTENT_WIDTH  = 573;
const HOME_CONTENT_HEIGHT = 200;
const MAX_MOBILE_VIEW_WIDTH = 670;

function Home() {
  const context = useContext(Context);

  const calcScale = () => {
    let diff = (MAX_MOBILE_VIEW_WIDTH - context.windowSize.width) / (MAX_MOBILE_VIEW_WIDTH);
    return 1 - diff;
  };

  const useStyles = makeStyles({
    homeContent: {
      position: 'fixed',
      width   : `${HOME_CONTENT_WIDTH}px`,
      left    : `calc(50% - ${HOME_CONTENT_WIDTH / 2}px)`,
      height  : `${HOME_CONTENT_HEIGHT}px`,
      top     : `calc(50% - ${HOME_CONTENT_HEIGHT / 2}px)`,
      transform: `scale(${context.windowSize.width > MAX_MOBILE_VIEW_WIDTH ? 1 : calcScale()})`
    },
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <div className={classes.homeContent}>
          <Typography
            align='left'
            variant='h5'
          >
            I'm
          </Typography>
          <Typography
            align='center'
            variant='h1'
          >
            Sreekar Mouli
          </Typography>
          <Typography
            align='right'
            variant='h5'
          >
            a Software Developer
          </Typography>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Home;