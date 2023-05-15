export default function Letraporletra({letrasDesabilitadas, setLetrasDesabilitadas, novaArray, cont, setCont, jogoIniciado, textoInput, setTextoInput, setJogoIniciado, setClasse, adivinhouPalavra, setAdivinhouPalavra}) {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function desabilitarBotao(letra) {
  
  setLetrasDesabilitadas([...letrasDesabilitadas, letra]);

  if (!novaArray.includes(letra)) {
    setCont(cont + 1);
    console.log("Contador Não Acertos", cont);
  }

}

function chutarPalavra (event) {
  setTextoInput(event.target.value);
}

function ehEssaPalavra () {

  const chuteEscrito = textoInput;
  console.log(chuteEscrito)
  const palavraAdivinhada = novaArray.join(''); // Nova variável criada
  console.log(palavraAdivinhada)

  if(chuteEscrito === palavraAdivinhada) {
      setJogoIniciado(false);
      setAdivinhouPalavra(true);
  } else {
      setJogoIniciado(false);
      setCont(6)
  }

  setTextoInput('');

}


  return (
    <div>
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
    <div className="englobainput">

    <p className="sabe">Já sei a palavra!</p>
    <input data-test="guess-input" className="escreve" disabled={!jogoIniciado ? true : false} onChange={chutarPalavra} value={textoInput}></input>
    <button data-test="guess-button" className={!jogoIniciado ? "disabled1" : "chuta"} disabled={!jogoIniciado ? true : false} onClick={ehEssaPalavra}>Chutar</button>

</div>
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

