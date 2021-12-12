import React, { useContext } from 'react';
import {
  AppBar,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import data from '../../data.json';
import Project from './Project';
import Context from '../../Context';

const useStyles = makeStyles((theme) => ({
  projectsPaper: {
    borderRadius: 0,
    height: '100%',
    backgroundColor: 'transparent',
    overflowY: 'scroll',
  },
  mobileViewHeader: {
    backgroundColor: `${theme.palette.primary.main}E6`,
  }
}));

function Projects() {
  const context = useContext(Context);
  const classes = useStyles();

  return (
    <Paper className={classes.projectsPaper}>
      <Container>
        {context.mobileView && (
          <React.Fragment>
            <Toolbar />
            <AppBar
              position="sticky"
              elevation={0}
              className={classes.mobileViewHeader}
            >
              <Typography
                variant="h4"
                align="center"
                style={{
                  fontFamily: '"Exo 2"',
                }}
              >
                PROJECTS
              </Typography>
              <br />
            </AppBar>
          </React.Fragment>
        )}
        <Toolbar />
        <Grid container spacing={3}>
          {data.projects.map((project, index) => (
            <Grid item key={index} xs={12} lg={4}>
              <Project project={project} />
            </Grid>
          ))}
        </Grid>
        <Toolbar />
        <Toolbar />
      </Container>
    </Paper>
  );
}

export default Projects;
