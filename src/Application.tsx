import React from 'react';
import { RouterSwitch } from './RouterSwitch';
import GlobalStyle from './styles/global.css';

function Application() {
  return (
    <div className='App'>
      <GlobalStyle />
      <RouterSwitch />
    </div>
  );
}

export default Application;
