import React, { useContext } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import Context from '../../Context';

function Home() {
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
          />
        ))}
      </Tabs>
    </div>
  );
}

export default Home;
