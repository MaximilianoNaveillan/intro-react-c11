import { useState } from "react";

function Hijo({ msn, SaludodesdeHijoaPadre }) {
  return (
    <div>
      <h1>Hijo</h1>
      <p>mensaje desde padre: {msn}</p>
      <button onClick={() => SaludodesdeHijoaPadre("hola padre...")}>
        saluda
      </button>
    </div>
  );
}

function Padre() {
  //    [  var   , function que cambia el estado de la variable]
  const [saludo, setSaludo] = useState(""); // Hook que permitira manejar estados en un compnente
  const SaludodesdeHijoaPadre = (mensaje) => {
    setSaludo(mensaje);
  };
  return (
    <div>
      <div>Padre</div>
      {/* <etiqueta-de-apertura ></etiqueta de cierre> */}
      <Hijo msn="hola hijo" SaludodesdeHijoaPadre={SaludodesdeHijoaPadre} />
      mensaje desde Hijo: {saludo}
    </div>
  );
}

export default Padre;
