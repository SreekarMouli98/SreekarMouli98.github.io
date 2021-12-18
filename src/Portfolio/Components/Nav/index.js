import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Tab,
  Tabs,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiMenu as MenuIcon } from 'react-icons/bi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import {
  BsBrightnessHigh as LightThemeIcon,
  BsBrightnessHighFill as DarkThemeIcon,
} from 'react-icons/bs';

import Context from '../../Context';
import CustomBackdrop from '../CustomBackdrop';
import * as CONSTANTS from '../../Constants';

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: theme.palette.background.topDownGradient,
  },
  tabItem: {
    fontFamily: '"Exo 2"',
    fontSize: '20px',
    color: theme.palette.text.hint,
  },
  themeIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 5,
    color: theme.palette.text.primary,
  },
  menuIcon: {
    position: 'fixed',
    top: '10px',
    left: '10px',
    zIndex: 1200,
  },
  '@keyframes loadMenu': {
    '0%': {
      transform: 'scale(0.6)',
    },
    '25%': {
      transform: 'scale(0.7)',
    },
    '50%': {
      transform: 'scale(0.8)',
    },
    '75%': {
      transform: 'scale(0.9)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  menuItem: {
    animation: '$loadMenu 100ms',
    color: 'white',
  },
}));

function Home() {
  const context = useContext(Context);
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];

  const handleTabChange = (event, newValue) => {
    context.changeView(menuItems[newValue]);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeChange = () => {
    context.switchUITheme();
  };

  const handleMenuItemClick = (newValue) => {
    if (newValue === 'theme') {
      handleThemeChange();
      return;
    }
    context.changeView(menuItems[newValue]);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!context.mobileView && menuOpen) {
      setMenuOpen(false);
    }
  }, [context.mobileView, menuOpen]);

  if (!context.mobileView) {
    return (
      <AppBar position="sticky" elevation={0} className={classes.navbar}>
        <Tabs
          centered
          value={menuItems.indexOf(context.view)}
          onChange={handleTabChange}
          indicatorColor="secondary"
        >
          {menuItems.map((menuItem) => (
            <Tab
              key={menuItem}
              label={menuItem}
              className={classes.tabItem}
            />
          ))}
        </Tabs>
        <Tooltip title="Switch theme">
          <IconButton
            onClick={handleThemeChange}
            className={classes.themeIcon}
          >
            {context.uiTheme === CONSTANTS.THEMES.LIGHT && <LightThemeIcon />}
            {context.uiTheme === CONSTANTS.THEMES.DARK && <DarkThemeIcon />}
          </IconButton>
        </Tooltip>
      </AppBar>
    );
  } else {
    return (
      <React.Fragment>
        {!menuOpen && (
          <IconButton
            className={classes.menuIcon}
            onClick={handleMenuClick}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Modal
          open={menuOpen}
          BackdropComponent={CustomBackdrop}
          style={{
            border: '1px solid red',
          }}
        >
          <React.Fragment>
            <IconButton
              className={classes.menuIcon}
              onClick={handleMenuClick}
              style={{
                color: 'white',
              }}
            >
              <CloseIcon />
            </IconButton>
            <Grid
              container
              spacing={0}
              direction="column"
              justify="center"
              alignItems="center"
              style={{
                height: '100vh',
              }}
            >
              <Grid item>
                <List component="nav">
                  {menuItems.map((menuItem, index) => (
                    <ListItem
                      key={menuItem}
                      button
                      alignItems="center"
                      onClick={() => handleMenuItemClick(index)}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          align: 'center',
                          variant: 'h5',
                          gutterBottom: true,
                          style: {
                            fontFamily: '"Exo 2"',
                          },
                        }}
                        className={classes.menuItem}
                      >
                        {menuItem}
                      </ListItemText>
                    </ListItem>
                  ))}
                  <ListItem
                    key="toggle-theme"
                    button
                    alignItems="center"
                    onClick={() => handleMenuItemClick('theme')}
                  >
                    <ListItemText
                      primary={'THEME - ' + context.uiTheme.toUpperCase()}
                      primaryTypographyProps={{
                        align: 'center',
                        variant: 'h5',
                        gutterBottom: true,
                        style: {
                          fontFamily: '"Exo 2"',
                        },
                      }}
                      className={classes.menuItem}
                    ></ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </React.Fragment>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Home;
