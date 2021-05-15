import React, { useContext } from 'react';
import { Container, Grid, Typography, Link, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../Context';

const MAX_MOBILE_VIEW_WIDTH = 670;
const REDUCE_PADDING_WIDTH  = 1000;
const MAX_PADDING = 150;
const MIN_PADDING = 10;

function Contact() {
  const context = useContext(Context);

  const calcPadding = () => {
    let percentReduced = ((REDUCE_PADDING_WIDTH - context.windowSize.width) / (REDUCE_PADDING_WIDTH - 300)) * 100;
    let paddingDelta = ((MAX_PADDING - MIN_PADDING) * (percentReduced / 100)) + MIN_PADDING;
    let padding = `${MAX_PADDING - paddingDelta}px`;
    return padding;
  };

  const useStyles = makeStyles({
    content: {
      paddingLeft : context.windowSize.width > REDUCE_PADDING_WIDTH ? `${MAX_PADDING}px` : calcPadding(),
      paddingRight: context.windowSize.width > REDUCE_PADDING_WIDTH ? `${MAX_PADDING}px` : calcPadding(),
    },
  });
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar />
      <Container>
        {context.windowSize.width <= MAX_MOBILE_VIEW_WIDTH ? (
          <React.Fragment>
            <Typography variant='h3' align='center'>
              CONTACT
            </Typography>
            <Toolbar />
          </React.Fragment>
        ) : (
          <Toolbar />
        )}
        <div className={classes.content}>
          <Typography
            variant='h5'
            align='center'
            gutterBottom
          >
            You can reach out to me over my email.
          </Typography>
        </div>
        <Toolbar />
      </Container>
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
    </React.Fragment>
  );
}

export default Contact;