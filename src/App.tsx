import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulComponent from './one';
import ObjectsWithLotsOfProperties from './two';
function App() {
  return (
    <>
    <StatefulComponent/>
    <hr></hr>
    <ObjectsWithLotsOfProperties/>
    </>
  );
}

export default App;
