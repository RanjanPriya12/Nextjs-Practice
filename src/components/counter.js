"use client";

import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const addCounterHandler = () =>{
    setCounter(prevValue=>prevValue+1);
  }
  const separateCounterHandler = () =>{
    if(counter <= 0){
        setCounter(0);
    }else{
        setCounter(prevValue=>prevValue-1);
    }
  }
  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={addCounterHandler}>Add</button>
      <button onClick={separateCounterHandler}>Separate</button>
    </>
  );
};
