import React, { useEffect, useState } from 'react';
import { getMessage } from './services';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessage()
      .then(data => {
          setMessage(data.message);
      }).catch(error => {
        setMessage(error.message);
      })
    return () => {};
  }, [])
 
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          {message}
        </h3>
      </header>
    </div>
  );
}

export default App;
