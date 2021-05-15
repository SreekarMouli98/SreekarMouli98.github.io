import React, { useContext } from 'react';
import { Container, Grid, Toolbar, Typography } from '@material-ui/core';
import data from '../../data.json';
import Project from './Project';
import Context from '../../Context';

const MAX_MOBILE_VIEW_WIDTH = 670;

function Projects() {
  const context = useContext(Context);

  const getProjectSize = () => {
    let width = context.windowSize.width;
    if (width < 570) {
      return 12;
    } else if (width < 880) {
      return 6;
    } else {
      return 4;
    }
  };

  return (
    <React.Fragment>
      <Toolbar />
      <Container>
        {context.windowSize.width < MAX_MOBILE_VIEW_WIDTH ? (
          <React.Fragment>
            <Typography variant='h3' align='center'>
              PROJECTS
            </Typography>
            <Toolbar />
          </React.Fragment>
        ) : (
          <Toolbar />
        )}
        <Grid
          container
          spacing={2}
        >
          {data.projects.map((project, index) => 
            <Grid
              item
              key={index}
              xs={getProjectSize()}
            >
              <Project project={project}/>
              <br />
            </Grid>
          )}
        </Grid>
        <Toolbar />
      </Container>
    </React.Fragment>
  )
}

export default Projects;