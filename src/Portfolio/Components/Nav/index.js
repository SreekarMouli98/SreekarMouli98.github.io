import React, { useContext, useEffect, useState } from 'react';
import { AppBar, IconButton, List, ListItem, ListItemText, Modal, Tab, Tabs } from '@material-ui/core';
import Context from '../../Context';
import { makeStyles } from '@material-ui/core/styles';
import { BiMenu as MenuIcon } from 'react-icons/bi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import CustomBackdrop from '../CustomBackdrop';

const MODEL_MENU_WIDTH  = 200;
const MODEL_MENU_HEIGHT = 250;
const MAX_MOBILE_VIEW_WIDTH = 670;

function Home() {
  const context = useContext(Context);

  const useStyles = makeStyles({
    navItem: {
      fontSize: '17px',
    },
    modalMenu: {
      position: 'fixed',
      width   : `${MODEL_MENU_WIDTH}px`,
      left    : `calc(50% - ${MODEL_MENU_WIDTH / 2}px)`,
      height  : `${MODEL_MENU_HEIGHT}px`,
      top     : `calc(50% - ${MODEL_MENU_HEIGHT / 2}px)`,
    },
    menuIcon: {
      position: 'fixed',
      top     : '10px',
      left    : '10px',
      '&:hover': {
        transform: 'scale(1.5)'
      }
    },
    navbar: {
      backgroundColor: context.windowSize.width > MAX_MOBILE_VIEW_WIDTH ? '#424242' : '#353535',
      height: '60px',
    },
    backdropRoot: {
      backgroundColor: 'red',
    }
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

  const handleMenuItemClick = (newValue) => {
    context.changeView(menuItems[newValue]);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (context.windowSize.width >= MAX_MOBILE_VIEW_WIDTH && menuOpen) {
      setMenuOpen(false);
    }
  }, [context.windowSize.width]);

  return (
    <AppBar
      className={classes.navbar}
      color='transparent'
      elevation={0}
    >
      {context.windowSize.width >= MAX_MOBILE_VIEW_WIDTH && (
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
              className={classes.navItem}
            />
          ))}
        </Tabs>
      )}
      {context.windowSize.width < MAX_MOBILE_VIEW_WIDTH && (
        <React.Fragment>
          {!menuOpen && (
            <IconButton
              className={classes.menuIcon}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Modal
            open={menuOpen}
            BackdropComponent={CustomBackdrop}
          >
            <React.Fragment>
              <IconButton
                className={classes.menuIcon}
                onClick={handleMenuClick}
              >
                <CloseIcon />
              </IconButton>
              <div className={classes.modalMenu}>
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
                      >
                        {menuItem}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </div>
            </React.Fragment>
          </Modal>
        </React.Fragment>
      )}
    </AppBar>
  );
}

export default Home;
