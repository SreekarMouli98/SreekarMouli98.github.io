import React, { useContext } from 'react';
import {
  AppBar,
  Container,
  Link,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Context from '../../Context';

const useStyles = makeStyles((theme) => ({
  aboutPaper: {
    height: '100%',
    backgroundColor: 'transparent',
    overflowY: 'scroll',
  },
  mobileViewHeader: {
    backgroundColor: `${theme.palette.background.default}E6`,
  }
}));

function About() {
  const context = useContext(Context);
  const classes = useStyles();

  return (
    <Paper className={classes.aboutPaper} square>
      <React.Fragment>
        <Toolbar />
        {context.mobileView && (
          <AppBar
            position="sticky"
            elevation={0}
            className={classes.mobileViewHeader}
          >
            <Typography
              color="textPrimary"
              variant="h4"
              align="center"
              style={{
                fontFamily: '"Exo 2"',
              }}
            >
              ABOUT
            </Typography>
            <br />
          </AppBar>
        )}
        <Toolbar />
        <Container>
          <Typography
            color="textPrimary"
            style={{ fontFamily: '"Noto Sans"' }}
            variant="h6"
            gutterBottom
          >
            Hi, I'm Sreekar Mouli.
          </Typography>
          <br />
          <Typography
            color="textPrimary"
            style={{ fontFamily: '"Noto Sans"' }}
            variant="h6"
            gutterBottom
          >
            I'm an enthusiastic Software Developer currently working at{' '}
            <Link
              href="https://www.linkedin.com/company/kore-inc"
              target="_blank"
              rel="noopener"
              color="primary"
            >
              Kore.ai
            </Link>{' '}
            in Hyderabad, India. For the company, I have developed several
            features like Digital Views, Digital Forms and have also build a new
            Application called Workflows from scratch.
          </Typography>
          <br />
          <Typography
            color="textPrimary"
            style={{ fontFamily: '"Noto Sans"' }}
            variant="h6"
            gutterBottom
          >
            As a kid, I was really interested in computers and technology in
            general. I was really suprised when I came across programming. That
            fact that you can build a software which does what you want it to do
            really interests me. Since then, I have been building several
            projects and learning new technologies.
          </Typography>
        </Container>
      </React.Fragment>
      <Toolbar />
    </Paper>
  );
}

export default About;
