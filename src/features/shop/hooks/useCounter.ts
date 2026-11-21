import { useState } from "react";

interface CounterProps {
  init: number;
  maxQuantity: number;
  minQuantity: number;
}

export const useCounter = ({
  init,
  maxQuantity,
  minQuantity
}: CounterProps) => {
  const [ counter, setCounter ] = useState(init);

  const increment = () => {
    setCounter( (prev) => (prev < maxQuantity ? prev + 1 : prev));
  }

  const decrement = () => {
    setCounter( (prev) => (prev > minQuantity ? prev - 1 : prev));
  }

  const reset = () => {
    setCounter( init );
  }

  return {
    counter,

    increment,
    decrement,
    reset
  }
}