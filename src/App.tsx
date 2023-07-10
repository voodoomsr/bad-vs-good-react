import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulComponent from './one';
import ObjectsWithLotsOfProperties from './two';
import IrresponsableParent from './three';
import ResponsableParent from './four';
function App() {
  return (
    <>
    <StatefulComponent/>
    <hr></hr>
    <ObjectsWithLotsOfProperties/>
    <hr></hr>
    <IrresponsableParent/>
    <hr></hr>
    <ResponsableParent/>
    </>
  );
}

export default App;
