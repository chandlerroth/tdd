import React from 'react';
import { AppHeader, StyledApp } from './index.styles'
import SignIn from '../SignIn';

function App() {
  return (
    <StyledApp>
      <AppHeader>
        <SignIn />
      </AppHeader>
    </StyledApp>
  );
}

export default App;
