import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import { getSuggestions } from './server';
import Suggestions from './suggestions';

function App() {
  return (
    <div className="appBox">
      <Suggestions />
    </div>
  );
}

export default App;
