import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="bg-light">    
      {<Portfolio></Portfolio>}

      </header>

      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}

export default App;
