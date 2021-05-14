import React from 'react';
import { Container, Grid } from '@material-ui/core';

import data from '../../data.json';
import Project from './Project';

function Projects() {
  return (
    <React.Fragment>
      <Container>
        <br />
        <br />
        <br />
        <Grid
          container
          spacing={2}
        >
          {data.projects.map((project, index) => 
            <Grid
              item
              key={index}
              xs={4}
            >
              <Project project={project}/>
              <br />
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Projects;