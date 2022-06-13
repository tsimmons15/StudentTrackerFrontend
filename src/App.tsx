import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
