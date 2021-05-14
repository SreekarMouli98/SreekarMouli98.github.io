import React from 'react';
import { Container, Grid, Paper, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CONTENT_WIDTH  = 800;
const CONTENT_HEIGHT = 400;

const useStyles = makeStyles({
  content: {
    position: 'fixed',
    width   : `${CONTENT_WIDTH}px`,
    left    : `calc(50% - ${CONTENT_WIDTH / 2}px)`,
    height  : `${CONTENT_HEIGHT}px`,
    top     : `calc(50% - ${CONTENT_HEIGHT / 2}px)`,
  },
});

function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Paper
          className={classes.content}
          elevation={0}
        >
          <Typography
            variant='h5'
            align='center'
            gutterBottom
          >
            You can reach out to me over my email.
          </Typography>
          <br />
          <br />
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='space-evenly'
          >
            <Grid item>
              <Typography variant='button'>
                EMAIL
              </Typography>
              <hr />
            </Grid>
            <Grid item>
              <Typography variant='button'>
                <Link href='mailto:sreekar.mouli1998@gmail.com'>sreekar.mouli1998@gmail.com</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default Contact;