import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes, Link, Route
} from 'react-router-dom';

import './index.css';
import App from './App';
import DataView from './components/data-view/data-view';
import SeatView from './components/seat-view/seat-view';
import NotFound from './components/not-found/not-found';
import HomeView from './components/home-view/home-view';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeView />} />
          <Route path="data" element={<DataView />} />
          <Route path="seating" element={<SeatView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);