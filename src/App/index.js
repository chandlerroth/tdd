import React from 'react';
import logo from '../logo.svg';
import { AppHeader, StyledApp, AppLink, AppLogo } from './index.styles'

function App() {
  return (
    <StyledApp>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </StyledApp>
  );
}

export default App;
