import React, { useState } from 'react';
import { Nav, Home, About, Projects, Contact, Footer } from './Components';
import Context from './Context';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './style.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffcc80',
    },
    secondary: {
      main: '#ef6c00',
    },
  },
});

function Portfolio(props) {
  const [view, setView] = useState('HOME');

  const changeView = newView => setView(newView);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Portfolio;