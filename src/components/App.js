import React, { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras'
import palavras from '../palavras';

export default function App() {

  let [arrayLetras, setArrayLetras] = useState([...palavras]);
  let [novaArray, setNovaArray] = useState([]);
  let [letrasDesabilitadas, setLetrasDesabilitadas] = useState([]);
  let [cont, setCont] = useState(0);
  let [jogoIniciado, setJogoIniciado] = useState(false);
  let [textoInput, setTextoInput] = useState('');
  let [classe, setClasse] = useState('');
  const [adivinhouPalavra, setAdivinhouPalavra] = useState(false);


  return (
    <div>

      <div className='container'>

        <Jogo arrayLetras={arrayLetras} novaArray={novaArray} setNovaArray={setNovaArray} letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} setJogoIniciado = {setJogoIniciado} classe={classe} setClasse={setClasse} setTextoInput={setTextoInput} adivinhouPalavra={adivinhouPalavra} setAdivinhouPalavra={setAdivinhouPalavra}/>

        <Letras letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} novaArray={novaArray} jogoIniciado={jogoIniciado}  textoInput={textoInput} setTextoInput={setTextoInput} setJogoIniciado={setJogoIniciado} setClasse={setClasse} adivinhouPalavra={adivinhouPalavra} setAdivinhouPalavra={setAdivinhouPalavra} />

      </div>

    </div>
  );
}
