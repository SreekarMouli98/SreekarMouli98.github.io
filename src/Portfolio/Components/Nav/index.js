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


function Home() {
  const context = useContext(Context);

  const useStyles = makeStyles({
    menuIcon: {
      position: 'fixed',
      top     : '10px',
      left    : '10px',
      zIndex  : 10000,
    },
    '@keyframes loadMenu': {
      '0%': {
        transform: 'scale(0.6)'
      },
      '25%': {
        transform: 'scale(0.7)'
      },
      '50%': {
        transform: 'scale(0.8)'
      },
      '75%': {
        transform: 'scale(0.9)'
      },
      '100%': {
        transform: 'scale(1)'
      },
    },
    menuItem: {
      animation: '$loadMenu 100ms',
      color    : 'white',
    },
  });

  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    'HOME',
    'ABOUT',
    'PROJECTS',
    'CONTACT',
  ];

  const handleTabChange = (event, newValue) => {
    context.changeView(menuItems[newValue]);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeChange = () => {
    let allThemes         = ['light', 'dark'];
    let currentThemeIndex = allThemes.indexOf(context.uiTheme);
    let nextThemeIndex    = (currentThemeIndex + 1) % allThemes.length;
    context.changeUITheme(allThemes[nextThemeIndex]);
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
  }, [context.mobileView]);

  if (!context.mobileView) {
    return (
      <AppBar
        position='sticky'
        color='primary'
        elevation={0}
      >
        <Tabs
          centered
          value={menuItems.indexOf(context.view)}
          onChange={handleTabChange}
          indicatorColor='secondary'
        >
          {menuItems.map((menuItem) => (
            <Tab
              key={menuItem}
              label={menuItem}
            />
          ))}
          <Tooltip title='Switch theme'>
            <IconButton
              onClick={handleThemeChange}
              style={{
                position: 'absolute',
                right: 0,
                marginRight: 5,
              }}
              color='secondary'
            >
              {context.uiTheme === 'light' && <LightThemeIcon />}
              {context.uiTheme === 'dark' && <DarkThemeIcon />}
            </IconButton>
          </Tooltip>
        </Tabs>
      </AppBar>
    );
  } else {
    return (
      <React.Fragment>
        <IconButton
          className={classes.menuIcon}
          onClick={handleMenuClick}
          color='secondary'
        >
          {!menuOpen ? <MenuIcon /> : <CloseIcon />}
        </IconButton>
        <Modal
          open={menuOpen}
          BackdropComponent={CustomBackdrop}
          style={{
            border: '1px solid red',
          }}
        >
          <Grid
            container
            spacing={0}
            direction='column'
            justify='center'
            alignItem='centerx'
            style={{
              height: '100vh',
            }}
          >
            <Grid item>
              <List component='nav'>
                {menuItems.map((menuItem, index) => (
                  <ListItem
                    key={menuItem}
                    button
                    alignItems='center'
                    onClick={() => handleMenuItemClick(index)}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        align: 'center',
                        variant: 'h5',
                        gutterBottom: true
                      }}
                      className={classes.menuItem}
                    >
                      {menuItem}
                    </ListItemText>
                  </ListItem>
                ))}
                <ListItem
                  key='toggle-theme'
                  button
                  alignItems='center'
                  onClick={() => handleMenuItemClick('theme')}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      align: 'center',
                      variant: 'h5',
                      gutterBottom: true,
                    }}
                    className={classes.menuItem}
                  >
                    Theme:{' '}
                    {context.uiTheme[0].toUpperCase() +
                      context.uiTheme.substr(1).toLowerCase()}
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Home;
