import React, { useState } from 'react';
export default function Letraporletra({botaoDesabilitar, setBotaoDesabilitar, letrasDesabilitadas, setLetrasDesabilitadas, novaArray, cont, setCont, contadortrava}) {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [ultimaLetraDesabilitada, setUltimaLetraDesabilitada] = useState("");

  function desabilitarBotao(indice) {
    if(contadortrava > 1) {

      setBotaoDesabilitar(prevState => ({ ...prevState, [indice]: true }));
    letrasDesabilitadas = alfabeto[indice];
    setLetrasDesabilitadas(prevState => [...prevState, letrasDesabilitadas]);
    setUltimaLetraDesabilitada(letrasDesabilitadas);

    if (!novaArray.includes(letrasDesabilitadas)) {
      setCont(cont + 1);
      console.log("Contador Não Acertos", cont)
    }

    }
  }

  return (
    <div className='letras'>
      {alfabeto.map((letra, indice) => (
        <Letras 
          key={indice} 
          virtualkey={letra} 
          botaoDesabilitar={botaoDesabilitar[indice]} 
          desabilitarBotao={() => desabilitarBotao(indice)} 
        />
      ))}
    </div>
  )
}

function Letras(props) {
  return (
    <button data-test="letter" className='button1' disabled={props.botaoDesabilitar} onClick={props.desabilitarBotao}>
      {props.virtualkey.toUpperCase()}
    </button>
  );
}

