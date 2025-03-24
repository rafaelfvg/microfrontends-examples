import React from 'react';
import RemoteWrapper from './RemoteWrapper';

const App = () => {
  return (
    <div>
      <h1>¡Hola desde el Host!</h1>
      <RemoteWrapper scope="app_remota" module="./HolaMundo" />
    </div>
  );
};

export default App;
