import React from "react";

export const TiposBasicos = () => {
  const nombre: string = "Edgar";
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? "Activo" : "Desactivado"}
      {/* {poderes.map((p) => (
        <span>{p}, </span>
      ))} */}
    </>
  );
};
