
import './App.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Logo from './components/Logo';

function App() {

  const [stateCar, setStateCar] = useState(0);

  const motor = () => {
    setStateCar(!stateCar);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <Button variant={!stateCar ? 'primary' : 'danger'} onClick={motor}>Encender/Apagar</Button>

      </header>
    </div>
  );
}

export default App;
