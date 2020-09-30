import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

function App() {
  return (
    <main className='App'>
      <HelloWorld />
      <Bomb count={0}/>
    </main>
  );
}

export default App;