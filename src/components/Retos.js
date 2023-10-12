import React, { useState } from 'react';
import Reto1 from './Reto1';
import Reto2 from './Reto2';
import Reto3 from './Reto3';
import Reto4 from './Reto4';
import Reto5 from './Reto5';

function Retos() {
  const [retos, setRetos] = useState(['Reto1', 'Reto2', 'Reto3', 'Reto4', 'Reto5']);
  const [retoSeleccionado, setRetoSeleccionado] = useState('Reto1');

  function renderizarReto(nombre) {
    switch (nombre) {
      case 'Reto1':
        return <Reto1 />;
      case 'Reto2':
        return <Reto2 />;
      case 'Reto3':
        return <Reto3 />;
      case 'Reto4':
        return <Reto4 />;
      case 'Reto5':
        return <Reto5 />;
      default:
        return <p>No se encontró el reto</p>;
    }
  }

  return (
    <div className="retos">
      <h1>Retos de programación</h1>
      <ul className="lista-retos">
        {retos.map((reto) => (
          <li key={reto} onClick={() => setRetoSeleccionado(reto)}>
            {reto}
          </li>
        ))}
      </ul>
      <div className="reto-seleccionado">{renderizarReto(retoSeleccionado)}</div>
    </div>
  );
}

export default Retos;