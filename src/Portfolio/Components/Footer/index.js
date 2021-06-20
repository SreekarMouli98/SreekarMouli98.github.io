import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import {
  RiGithubFill as GithubIcon,
  RiStackOverflowLine as StackOverflowIcon,
  RiLinkedinBoxFill as LinkedInIcon,
} from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../Context';
import data from '../../data.json';

const MAX_MOBILE_VIEW_WIDTH = 670;

function Footer() {
  const context = useContext(Context);

  const useStyles = makeStyles({
    footer: {
      position       : 'fixed',
      bottom         : 0,
      left           : 0,
      right          : 0,
      backgroundColor: context.windowSize.width > MAX_MOBILE_VIEW_WIDTH ? '#424242' : '#353535',
      height         : '50px',
    },
    buttonNav: {
      position: 'fixed',
      width   : '150px',
      bottom  : '5px',
      left    : `calc(50% - 75px)`,
    },
    icon: {
      transition: '100ms',
      '&:hover' : {
        transform: 'scale(1.05)'
      }
    }
  });

  const classes = useStyles();

  const openLinkInNewTab = link => window.open(link);

  return (
    <div className={classes.footer}>
      <div className={classes.buttonNav}>
        <Tooltip title='Github'>
          <IconButton
            className={classes.icon}
            onClick={() => openLinkInNewTab(data.accounts.github)}
          >
            <GithubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Stack Overflow'>
          <IconButton
            className={classes.icon}
            onClick={() => openLinkInNewTab(data.accounts.stackOverflow)}
          >
            <StackOverflowIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='LinkedIn'>
          <IconButton
            className={classes.icon}
            onClick={() => openLinkInNewTab(data.accounts.linkedIn)}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default Footer;