import React, { Component, useEffect } from "react";

const StatefulComponent = () => {
  let [scalar, setScalar] = React.useState(0);
  const [object, setObject] = React.useState({
    name: "John Doe",
    age: 30,
  });
  const [array, setArray] = React.useState([
    {
      name: "Jane Doe",
      age: 25,
    },
    {
      name: "Mary Smith",
      age: 40,
    },
  ]);

  useEffect(() => {
    console.log("scalar", scalar);
  }, [scalar]);

  useEffect(() => {
    console.log("object", object);
  }, [object]);

  useEffect(() => {
    console.log("array", array);
  }, [array]);

  // Good way to set state
  const handleChangeScalar = () => {
    setScalar(scalar + 1);
  };

  const handleChangeObject = () => {
    setObject(() => {
      return { ...object, age: object.age + 1 };
    });
  };

  const handleChangeArray = () => {
    setArray((current) => {
      let modifiedFirst = { ...current[0] };
      modifiedFirst.age = modifiedFirst.age + 1;
      return [modifiedFirst, ...current.slice(1)];
    });
  };

  // Bad way to set state
  // This will directly update the reference of the state variable,
  // which is not recommended.
  const handleChangeScalarBad = () => {
    scalar = scalar + 1;
    setScalar(scalar);
  };

  const handleChangeObjectBad = () => {
    object.age = object.age + 1;
    setObject(object);
  };

  const handleChangeArrayBad = () => {
    array[0].age = array[0].age + 1;
    setArray(array);
  };

  return (
    <div>
      <h1>Stateful Component</h1>
      {/* <p>Scalar state: {scalar}</p> */}
      <button onClick={handleChangeScalar}>Change scalar</button>
      <button onClick={handleChangeScalarBad} style={{backgroundColor: 'orange'}}>Change scalar Bad doesn't affect</button>
      <p>Object state: </p>
      {/* <>{object}</> */}
      <button onClick={handleChangeObject}>Change object</button>
      <button onClick={handleChangeObjectBad} style={{backgroundColor: 'orange'}}>Change object Bad, reference doesn't change</button>
      <p>Array state: </p>
      {/* <>{array}</> */}
      <button onClick={handleChangeArray}>Change array</button>
      <button onClick={handleChangeArrayBad} style={{backgroundColor: 'orange'}}>Change array Bad, reference doesn't change</button>
    </div>
  );
};

export default StatefulComponent;
