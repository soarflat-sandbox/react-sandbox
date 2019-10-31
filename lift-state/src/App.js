import React from 'react';

import LiftUp from './components/LiftUp';
import LiftDown from './components/LiftDown';

function App() {
  const list = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Vue' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'jQuery' }
  ];

  return (
    <div className="App">
      <h1>A React Lift State Up & Down Example</h1>
      <LiftUp list={list} />
      <LiftDown list={list} />
    </div>
  );
}

export default App;
