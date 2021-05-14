import React, { useState } from 'react';
import { Nav, Home, About, Projects } from './Components';
import Context from './Context';

function Portfolio(props) {
  const [view, setView] = useState('PROJECTS');

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
        {view === 'PROJECTS' && <Projects />}
      </Context.Provider>
    </React.Fragment>
  );
}

export default Portfolio;