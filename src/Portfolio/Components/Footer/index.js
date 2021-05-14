import React from 'react';
import { ButtonGroup, IconButton, Tooltip } from '@material-ui/core';
import {
  RiGithubFill as GithubIcon,
  RiStackOverflowLine as StackOverflowIcon,
  RiLinkedinBoxFill as LinkedInIcon,
} from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonNav: {
    position: 'fixed',
    width   : '140px',
    bottom  : '10px',
    left    : `calc(50% - 70px)`,
  },
  icon: {
    transition: '100ms',
    '&:hover' : {
      transform: 'scale(1.05)'
    }
  }
});

function Footer() {
  const classes = useStyles();

  const openLinkInNewTab = link => window.open(link);

  return (
    <React.Fragment>
      <ButtonGroup
        className={classes.buttonNav}
      >
        <Tooltip title='Github'>
          <IconButton
            className={classes.icon}
            onClick={() => openLinkInNewTab('https://github.com/mouli2105')}
          >
            <GithubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Stack Overflow'>
          <IconButton
            className={classes.icon}
            onClick={() => openLinkInNewTab('https://stackoverflow.com/users/8208804/sreekar-mouli')}
          >
            <StackOverflowIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='LinkedIn'>
          <IconButton
            className={classes.icon}
            onClick={() => openLinkInNewTab('https://www.linkedin.com/in/mouli2105')}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </React.Fragment>
  );
}

export default Footer;