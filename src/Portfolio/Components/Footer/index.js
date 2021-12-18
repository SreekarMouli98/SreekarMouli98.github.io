import React from 'react';
import { AppBar, Grid, IconButton, Tooltip } from '@material-ui/core';
import {
  RiGithubFill as GithubIcon,
  RiStackOverflowLine as StackOverflowIcon,
  RiLinkedinBoxFill as LinkedInIcon,
} from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';

import data from '../../data.json';

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    background: theme.palette.background.bottomUpGradient,
  },
  icon: {
    transition: '100ms',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  const openLinkInNewTab = (link) => window.open(link);

  return (
    <AppBar position="sticky" className={classes.footer}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Tooltip title="Github">
            <IconButton
              className={classes.icon}
              onClick={() => openLinkInNewTab(data.accounts.github)}
              color="primary"
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Stack Overflow">
            <IconButton
              className={classes.icon}
              onClick={() => openLinkInNewTab(data.accounts.stackOverflow)}
              color="primary"
            >
              <StackOverflowIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="LinkedIn">
            <IconButton
              className={classes.icon}
              onClick={() => openLinkInNewTab(data.accounts.linkedIn)}
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
