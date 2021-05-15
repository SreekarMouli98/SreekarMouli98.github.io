import React, { useContext } from 'react';
import { Container, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../Context';

const MAX_MOBILE_VIEW_WIDTH = 670;
const REDUCE_PADDING_WIDTH  = 1000;
const MAX_PADDING = 150;
const MIN_PADDING = 10;

function About() {
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
              ABOUT
            </Typography>
            <Toolbar />
          </React.Fragment>
        ) : (
          <Toolbar /> 
        )}
        <div className={classes.content}>
          <Typography variant='h6' gutterBottom>
            Hi, I'm Sreekar Mouli.
          </Typography>
          <br />
          <Typography variant='h6' gutterBottom>
            I'm an enthusiastic Software Developer currently working at <Link href='https://www.linkedin.com/company/kore-inc' target='_blank' rel='noopener'>Kore.ai</Link> in Hyderabad, India. For the company, I have developed several features like Digital Views, Digital Forms and have also build a new Application called Workflows from scratch.
          </Typography>
          <br />
          <Typography variant='h6' gutterBottom>
            As a kid, I was really interested in computers and technology in general. I was really suprised when I came across programming. That fact that you can build a software which does what you want it to do really interests me. Since then, I have been building several projects and learning new technologies.
          </Typography>
        </div>
      </Container>
      <Toolbar />
    </React.Fragment>
  )
}

export default About;