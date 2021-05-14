import React, { useContext } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import Context from '../../Context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navItem: {
    fontSize: '17px',
  },
});

function Home() {
  const classes = useStyles();
  const context = useContext(Context);

  const menuItems = [
    'HOME',
    'ABOUT',
    'PROJECTS',
    'CONTACT',
  ];

  const handleTabChange = (event, newValue) => {
    context.changeView(menuItems[newValue]);
  };

  return (
    <div>
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
    </div>
  );
}

export default Home;
