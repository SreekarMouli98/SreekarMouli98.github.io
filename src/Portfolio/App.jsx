import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Nav, Home, About, Projects, Contact, Footer } from './Components';
import Context from './Context';

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
      {view === 'HOME' && <Home />}
      {view === 'ABOUT' && <About />}
      {view === 'PROJECTS' && <Projects />}
      {view === 'CONTACT' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
