import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { lightTheme, darkTheme } from './Themes';
import { Nav, Home, About, Projects, Contact, Footer } from './Components';
import Context from './Context';

const MAX_MOBILE_VIEW_WIDTH = 670;

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

const useStyles = makeStyles(theme => ({
  app: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
  }
}));

function Portfolio(props) {
  const classes = useStyles();
  const [uiTheme, changeUITheme] = useState('light');
  const [view, changeView] = useState('HOME');
  const windowSize = useWindowSize();
  const [mobileView, setMobileView] = useState(false);

  const getCurrentTheme = () => {
    let currentTheme;
    if (uiTheme === 'light')
      currentTheme = lightTheme;
    if (uiTheme === 'dark')
      currentTheme = darkTheme;
    return createMuiTheme(currentTheme);
  };

  const onResize = () => {
    setMobileView(windowSize.width <= MAX_MOBILE_VIEW_WIDTH);
  };

  useEffect(() => {
    let dt = new Date();
    if (dt.getTime() > 18) {
      changeUITheme('dark');
    }
    onResize();
  }, []);

  useEffect(onResize, [windowSize]);

  return (
    <div
      id='app'
      className={classes.app}
    >
      <ThemeProvider theme={getCurrentTheme()}>
        <Context.Provider value={{
          view,
          changeView,
          windowSize,
          uiTheme,
          changeUITheme,
          mobileView,
        }}>
          <Nav />
          {view === 'HOME' && <Home />}
          {view === 'ABOUT' && <About />}
          {view === 'PROJECTS' && <Projects />}
          {view === 'CONTACT' && <Contact />}
          <Footer />
        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default Portfolio;