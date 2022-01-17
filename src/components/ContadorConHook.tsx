import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, acumular, reset } = useCounter(0);

  return (
    <>
      <h3>
        Contador con hook: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        + 1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        {" "}
        - 1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => reset()}>
        {" "}
        reset
      </button>
    </>
  );
};
