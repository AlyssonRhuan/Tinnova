import React from 'react';
import Vehicle from './Vechicles/Vechicle';

// STYLES
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <section className="ml-5">
      <title>Tinnova Vehicles</title>
      {
        <Vehicle />
      }
    </section>
  );
}

export default App;
