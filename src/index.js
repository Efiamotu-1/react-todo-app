import React from 'react';
import { createRoot } from 'react-dom/client';
// component file
import { HashRouter as Router } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
// stylesheet
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
