import React, { useContext } from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../Context';

const useStyles = makeStyles({
  navBar: {
    position: 'fixed',
    width   : '150px',
    top     : '10px',
    right   : '10px',
    border  : '1px solid black',
  },
});

function Home() {
  const context = useContext(Context);
  const classes = useStyles();

  const menuItems = [
    'HOME',
    'PROJECTS',
    'CONNECT',
  ];

  const handleNavItemClick = (newView) => {
    context.changeView(newView);
  };

  return (
    <div className={classes.navBar}>
      <MenuList>
        {menuItems.map(menuItem => (
          <MenuItem
            key={menuItem}
            name={menuItem}
            selected={context.view === menuItem}
            onClick={() => handleNavItemClick(menuItem)}
          >
            {menuItem}
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}

export default Home;
