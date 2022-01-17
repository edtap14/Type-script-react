import { useState, useEffect, useRef } from "react";
import { ReqResListado, Usuario } from "../interfaces/recRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    //llamado a la Api
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current
      }
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current--;
      alert("no hay mas registros");
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return { usuarios, paginaAnterior, paginaSiguiente };
};
