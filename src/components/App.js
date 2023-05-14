import React, { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras'
import palavras from '../palavras';

export default function App() {

  let [arrayLetras, setArrayLetras] = useState([...palavras]);
  let [novaArray, setNovaArray] = useState([]);
  const [botaoDesabilitar, setBotaoDesabilitar] = useState({});
  const [letrasDesabilitadas, setLetrasDesabilitadas] = useState([]);
  let [cont, setCont] = useState(0);
  const [letra, setLetra] = useState('');
  const [jogoIniciado, setJogoIniciado] = useState(false);

  return (
    <div>

      <div className='container'>

        <Jogo arrayLetras={arrayLetras} setArrayLetras={setArrayLetras} novaArray={novaArray} setNovaArray={setNovaArray} letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} letra={letra} setLetra={setLetra} botaoDesabilitar={botaoDesabilitar} setBotaoDesabilitar={setBotaoDesabilitar} jogoIniciado={jogoIniciado} setJogoIniciado = {setJogoIniciado} />

        <Letras botaoDesabilitar={botaoDesabilitar} setBotaoDesabilitar={setBotaoDesabilitar} letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} setNovaArray={setNovaArray} novaArray={novaArray} jogoIniciado={jogoIniciado} setJogoIniciado = {setJogoIniciado} />

      </div>

    </div>
  );
}
