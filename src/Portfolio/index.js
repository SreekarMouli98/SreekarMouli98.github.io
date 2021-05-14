import React, { useState } from 'react';
import { Nav, Home } from './Components';
import Context from './Context';

function Portfolio(props) {
  const [view, setView] = useState('HOME');

  const changeView = newView => setView(newView);

  return (
    <React.Fragment>
      <Context.Provider value={{
        view,
        changeView,
      }}>
        <Nav />
        {view === 'HOME' && <Home />}
      </Context.Provider>
    </React.Fragment>
  );
}

export default Portfolio;