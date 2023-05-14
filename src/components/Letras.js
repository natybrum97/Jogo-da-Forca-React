export default function Letraporletra({botaoDesabilitar, setBotaoDesabilitar, letrasDesabilitadas, setLetrasDesabilitadas, novaArray, cont, setCont, jogoIniciado, setJogoIniciado}) {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function desabilitarBotao(letra) {
  
  setLetrasDesabilitadas([...letrasDesabilitadas, letra]);

  if (!novaArray.includes(letra)) {
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
          botaoDesabilitar={!jogoIniciado ? true : letrasDesabilitadas.includes(letra) ? true : false}
          desabilitarBotao={() => desabilitarBotao(letra)} 
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

