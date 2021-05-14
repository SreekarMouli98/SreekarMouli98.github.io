import React, { useState } from 'react';
import { Nav, Home, About } from './Components';
import Context from './Context';

function Portfolio(props) {
  const [view, setView] = useState('ABOUT');

  const changeView = newView => setView(newView);

  return (
    <React.Fragment>
      <Context.Provider value={{
        view,
        changeView,
      }}>
        <Nav />
        {view === 'HOME' && <Home />}
        {view === 'ABOUT' && <About />}
      </Context.Provider>
    </React.Fragment>
  );
}

export default Portfolio;