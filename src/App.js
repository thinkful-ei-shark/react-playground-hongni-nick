import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <HelloWorld />
      <Bomb count={0}/>
      <RouletteGun />
    </main>
  );
}

export default App;