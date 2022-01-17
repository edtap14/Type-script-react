import { useState } from "react";

export const useCounter = (inicial: number = 10) => {
  const [valor, setValor] = useState(inicial);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  const reset = () => {
    setValor(0);
  };

  return {
    valor,
    reset,
    acumular
  };
};
