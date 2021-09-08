import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  
  return (
    <div className="App">
      <AppBar className="App-header" position="static">
        <Toolbar className="App-header">
          <Button className="menuButton" color="inherit">  
            <Typography variant="h4" className="logo" align="left">
                FTT, LLC
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <div className="App-body">
        <div>
          <p>
              Site is under construction. Please check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
