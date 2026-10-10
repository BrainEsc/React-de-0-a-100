
import { useState } from "react";
import "./botones.css"

export function Botones() {
  //use estate color
  const [activo, setActivo] = useState(false);
  const buttonClassName = activo ? "btn-statecard" : "btn-statecard-desactivado";
  const text = activo ? "Activado" : "Desactivado";
  const handleClick = () => {
    setActivo(!activo);
  };

  //boton contador
  const [contador, setContador] = useState(0);
  const contClick = () => setContador(prev => prev + 1)
  

  return (
    <div>
      <br/>
      <button onClick={handleClick} className={buttonClassName}>
        {text}
      </button>

      <button onClick={contClick} className="btn-countCard">
        Clics: {contador}
      </button>
      <button onClick={() => setContador(0)} className="btn-reloadCount" >
        Reiniciar contador
      </button>
    </div>
  );
}

