import React, { useEffect, useState } from 'react';
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

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width : window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width : window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Portfolio(props) {
  const [view, setView] = useState('HOME');
  const windowSize = useWindowSize();

  const changeView = newView => setView(newView);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{
          view,
          changeView,
          windowSize,
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