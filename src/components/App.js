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

  return (
    <div>

      <div className='container'>

        <Jogo arrayLetras={arrayLetras} novaArray={novaArray} setNovaArray={setNovaArray} letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} setJogoIniciado = {setJogoIniciado} />

        <Letras letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} novaArray={novaArray} jogoIniciado={jogoIniciado} />

      </div>

    </div>
  );
}
