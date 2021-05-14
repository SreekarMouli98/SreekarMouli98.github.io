import React, { useState } from 'react';
import { Nav, Home, About, Projects, Contact, Footer } from './Components';
import Context from './Context';

function Portfolio(props) {
  const [view, setView] = useState('CONTACT');

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
        {view === 'CONTACT' && <Contact />}
        <Footer />
      </Context.Provider>
    </React.Fragment>
  );
}

export default Portfolio;