import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { lightTheme, darkTheme } from './Themes';
import Context from './Context';
import App from './App';
import * as CONSTANTS from './Constants';

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

function Portfolio(props) {
  const [uiTheme, changeUITheme] = useState(CONSTANTS.THEMES.LIGHT);
  const [view, changeView] = useState(CONSTANTS.TABS.HOME);
  const windowSize = useWindowSize();
  const [mobileView, setMobileView] = useState(false);

  const getCurrentTheme = () => {
    let currentTheme;
    if (uiTheme === CONSTANTS.THEMES.LIGHT)
      currentTheme = lightTheme;
    else if (uiTheme === CONSTANTS.THEMES.DARK)
      currentTheme = darkTheme;
    return createMuiTheme(currentTheme);
  };

  const switchUITheme = () => {
    let nextTheme;
    if (uiTheme === CONSTANTS.THEMES.LIGHT)
      nextTheme = CONSTANTS.THEMES.DARK;
    else if (uiTheme === CONSTANTS.THEMES.DARK)
      nextTheme = CONSTANTS.THEMES.LIGHT;
    return changeUITheme(nextTheme);
  };

  const onResize = () => {
    setMobileView(windowSize.width <= MAX_MOBILE_VIEW_WIDTH);
  };

  useEffect(onResize, [windowSize]);

  useEffect(() => {
    let dt = new Date();
    if (dt.getHours() >= 18 || dt.getHours() <= 7) {
      changeUITheme(CONSTANTS.THEMES.DARK);
    }
  }, [])

  return (
    <ThemeProvider theme={getCurrentTheme()}>
      <Context.Provider value={{
        view,
        changeView,
        windowSize,
        uiTheme,
        switchUITheme,
        mobileView,
      }}>
        <App />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default Portfolio;