import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Nav, Home, About, Projects, Contact, Footer } from './Components';
import Context from './Context';
import * as CONSTANTS from './Constants';
import './App.css';

const useStyles = makeStyles((theme) => ({
  app: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: theme.palette.background.circularGradient,
  },
}));

function App(props) {
  const context = useContext(Context);
  const classes = useStyles();
  const view = context.view;

  return (
    <div id="app" className={classes.app}>
      <Nav />
      {view === CONSTANTS.TABS.HOME && <Home />}
      {view === CONSTANTS.TABS.ABOUT && <About />}
      {view === CONSTANTS.TABS.PROJECTS && <Projects />}
      {view === CONSTANTS.TABS.CONTACT && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
