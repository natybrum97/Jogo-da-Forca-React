import React, { useState } from 'react';
export default function Letraporletra({botaoDesabilitar, setBotaoDesabilitar, letrasDesabilitadas, setLetrasDesabilitadas, novaArray, cont, setCont, jogoIniciado, setJogoIniciado}) {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [ultimaLetraDesabilitada, setUltimaLetraDesabilitada] = useState("");

  function desabilitarBotao(indice) {
  setJogoIniciado(false);
  const letraClicada = alfabeto[indice];
  setLetrasDesabilitadas([...letrasDesabilitadas, letraClicada]);
  setUltimaLetraDesabilitada(letraClicada);

  if (!novaArray.includes(letraClicada)) {
    setCont(cont + 1);
    console.log("Contador Não Acertos", cont);
  }

}


  return (
    <div className='letras'>
      {alfabeto.map((letra, indice) => (
        <Letras 
          key={indice} 
          virtualkey={letra} 
          botaoDesabilitar={!jogoIniciado || botaoDesabilitar[indice]} 
          desabilitarBotao={() => desabilitarBotao(indice)} 
        />
      ))}
    </div>
  )
}

function Letras(props) {
  return (
    <button data-test="letter" className= {props.botaoDesabilitar ? "disabled" : "enabled"} disabled={props.botaoDesabilitar} onClick={props.desabilitarBotao}>
      {props.virtualkey.toUpperCase()}
    </button>
  );
}

