import {Header} from './Components/Header'
import {GlobalStyle} from './styles/global';
import {Dashboard} from './Components/Dashboard'
import React from 'react';

function App(){
  return(
    <div className="App">
      <Header />
      <GlobalStyle  />
      <Dashboard />
    </div>
  );
}

export default App;