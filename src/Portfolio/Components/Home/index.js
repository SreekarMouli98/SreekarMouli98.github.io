import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Context from '../../Context';
import { RESOLUTIONS } from '../../Constants';

const computeNameSize = (windowWidth) => {
  if (windowWidth <= RESOLUTIONS.MOBILE.VIEW1.WIDTH) {
    return '39px';
  }
  if (windowWidth <= RESOLUTIONS.DESKTOP.VIEW2.WIDTH) {
    return '77px';
  }
  if (windowWidth >= RESOLUTIONS.DESKTOP.VIEW1.WIDTH) {
    return '110px';
  }
  return '87px';
};

const computeNameSubTextSize = (windowWidth) => {
  if (windowWidth <= RESOLUTIONS.MOBILE.VIEW1.WIDTH) {
    return '16px';
  }
  if (windowWidth <= RESOLUTIONS.DESKTOP.VIEW2.WIDTH) {
    return '20px';
  }
  return '28px';
};

const useStyles = makeStyles(theme => ({
  '@keyframes loadPrefix': {
    '0%': {
      transform: 'translateX(-100%)',
    },
  },
  '@keyframes loadSuffix': {
    '0%': {
      transform: 'translateX(100%)',
    },
  },
  homePaper: {
    height: '100%',
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  nameCard: {
    backgroundColor: 'transparent',
  },
  name: props => ({
    ...theme.typography.caption,
    color: theme.palette.secondary.main,
    textAlign: 'center',
    fontSize: computeNameSize(props.windowWidth),
    fontWeight: 'bold',
    fontFamily: '"Exo 2", sans-serif',
    textShadow: `+2px +2px 8px ${theme.palette.primary.main},\
                -2px +2px 8px ${theme.palette.primary.main},\
                -2px -2px 8px ${theme.palette.primary.main},\
                +2px -2px 8px ${theme.palette.primary.main}`,
    position: 'relative',
    '&::before': {
      content: '"I\'M"',
      display: 'block',
      position: 'absolute',
      fontSize: computeNameSubTextSize(props.windowWidth),
      fontWeight: 'normal',
      top: 0,
      left: 0,
      marginTop: '-32px',
      // animation: '$loadPrefix 1s',
    },
    '&::after': {
      content: '"A SOFTWARE ENGINEER"',
      display: 'block',
      position: 'absolute',
      fontSize: computeNameSubTextSize(props.windowWidth),
      fontWeight: 'normal',
      right: 0,
      bottom: 0,
      marginBottom: '-32px',
      // animation: '$loadSuffix 1s',
    },
  }),
}));

function Home(props) {
  const context = useContext(Context);
  const classes = useStyles({ windowWidth: context.windowSize.width });
  return (
    <Paper className={classes.homePaper}>
      <Grid
        container
        spacing={0}
        direction='column'
        justify='center'
        style={{
          height: '100%',
        }}
      >
        <Grid item>
          <Grid container>
            <Grid item xs={false} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Card elevation={0} className={classes.nameCard}>
                <CardContent>
                  <h1 className={classes.name}>
                    SREEKAR MOULI
                  </h1>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={false} lg={3}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home;