import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const HOME_CONTENT_WIDTH  = 580;
const HOME_CONTENT_HEIGHT = 400;

const useStyles = makeStyles({
  homeContent: {
    position: 'fixed',
    width   : `${HOME_CONTENT_WIDTH}px`,
    left    : `calc(50% - ${HOME_CONTENT_WIDTH / 2}px)`,
    height  : `${HOME_CONTENT_HEIGHT}px`,
    top     : `calc(50% - ${HOME_CONTENT_HEIGHT / 2}px)`,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Paper
          elevation={0}
          className={classes.homeContent}
        >
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
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Home;