import React, { useContext } from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Toolbar,
  Paper,
  AppBar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Context from '../../Context';

const useStyles = makeStyles((theme) => ({
  contactPaper: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  mobileViewHeader: {
    backgroundColor: `${theme.palette.background.default}E6`,
  }
}));

function Contact() {
  const context = useContext(Context);
  const classes = useStyles();

  return (
    <Paper className={classes.contactPaper} square>
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
              CONTACT
            </Typography>
            <br />
          </AppBar>
        )}
        <Container>
          <Toolbar />
          <Typography
            color="textPrimary"
            style={{ fontFamily: '"Noto Sans"' }}
            variant="h5"
            align="center"
            gutterBottom
          >
            You can reach out to me over my email.
          </Typography>
          <Toolbar />
        </Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="space-evenly"
        >
          <Grid item>
            <Typography color="textPrimary" variant="button">
              EMAIL
            </Typography>
            <hr />
          </Grid>
          <Grid item>
            <Typography color="textPrimary" variant="button">
              <Link color="primary" href="mailto:sreekar.mouli1998@gmail.com">
                sreekar.mouli1998@gmail.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </Paper>
  );
}

export default Contact;
