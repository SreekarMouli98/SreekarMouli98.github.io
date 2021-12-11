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
    background: theme.palette.background.circularGradient,
    overflowY: 'scroll',
  },
}));

function Projects() {
  const context = useContext(Context);
  const classes = useStyles();

  return (
    <Paper className={classes.projectsPaper}>
      <Container>
        {context.mobileView && (
          <AppBar position="sticky" elevation={0}>
            <Typography
              variant="h4"
              align="center"
              style={{
                fontFamily: '"Exo 2"',
              }}
            >
              PROJECTS
            </Typography>
          </AppBar>
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
