import React, { useContext } from 'react';
import { Container, Grid, Typography, Link, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../Context';

const MAX_MOBILE_VIEW_WIDTH = 670;
const REDUCE_PADDING_WIDTH  = 1000;

function Contact() {
  const context = useContext(Context);

  const useStyles = makeStyles({
    content: {
      paddingLeft : context.windowSize.width > REDUCE_PADDING_WIDTH ? '200px' : '50px',
      paddingRight: context.windowSize.width > REDUCE_PADDING_WIDTH ? '200px' : '50px',
    },
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar />
      <Container>
        {context.windowSize.width <= MAX_MOBILE_VIEW_WIDTH && (
          <React.Fragment>
            <Typography variant='h3' align='center'>
              CONTACT
            </Typography>
            <Toolbar />
          </React.Fragment>
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
      </Container>
    </React.Fragment>
  );
}

export default Contact;