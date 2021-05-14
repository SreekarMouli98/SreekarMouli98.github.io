import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CONTENT_WIDTH  = 900;
const CONTENT_HEIGHT = 600;

const useStyles = makeStyles({
  content: {
    position: 'fixed',
    width   : `${CONTENT_WIDTH}px`,
    left    : `calc(50% - ${CONTENT_WIDTH / 2}px)`,
    height  : `${CONTENT_HEIGHT}px`,
    top     : `calc(50% - ${CONTENT_HEIGHT / 2}px)`,
  },
});


function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
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
    </React.Fragment>
  )
}

export default About;