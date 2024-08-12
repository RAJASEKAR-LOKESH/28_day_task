import React, { createContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [counter, setCounter] = useState({
    result: [109.95,22.3,55.99,15.99,695,168,9.99,10.99,64,109],
    amount: Array(10).fill(1),
    price:[109.95,22.3,55.99,15.99,695,168,9.99,10.99,64,109]
  });

  const increment = (id) => {
    const updatedAmount = [...counter.amount];
    const updatedResult = [...counter.result];
    const updatedPrice = [...counter.price];

    updatedAmount[id]++;
    updatedResult[id]=(updatedPrice[id]*updatedAmount[id]).toFixed(2);
    setCounter({ amount: updatedAmount, result: updatedResult, price: updatedPrice });
  };

  const decrement = (id) => {
    const updatedAmount = [...counter.amount];
    const updatedResult = [...counter.result];
    const updatedPrice = [...counter.price];

    if (updatedAmount[id] > 0) {
      updatedAmount[id]--;
      updatedResult[id]=(updatedPrice[id]*updatedAmount[id]).toFixed(2);

    }

    setCounter({ amount: updatedAmount, result: updatedResult,price: updatedPrice });
  };

  return (
    <StateContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
