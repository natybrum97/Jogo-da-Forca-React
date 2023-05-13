import React, { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras'
import palavras from '../palavras';

export default function App() {

  let [arrayLetras, setArrayLetras] = useState([...palavras]);
  let [novaArray, setNovaArray] = useState([]);
  const [botaoDesabilitar, setBotaoDesabilitar] = useState((
    'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, letra) => {
      acc[letra] = false;
      return acc;
    }, {})
  ));
  const [letrasDesabilitadas, setLetrasDesabilitadas] = useState([]);
  let [cont, setCont] = useState(0);
  let [contnormal, setContNormal] = useState(0);
  const [letra, setLetra] = useState('');
  const [contadortrava, setContadorTrava] = useState(1);

  return (
    <div>

      <div className='container'>

        <Jogo arrayLetras={arrayLetras} setArrayLetras={setArrayLetras} novaArray={novaArray} setNovaArray={setNovaArray} letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} letra={letra} setLetra={setLetra} contadortrava={contadortrava} setContadorTrava={setContadorTrava}/>

        <Letras botaoDesabilitar={botaoDesabilitar} setBotaoDesabilitar={setBotaoDesabilitar} letrasDesabilitadas={letrasDesabilitadas} setLetrasDesabilitadas={setLetrasDesabilitadas} cont={cont} setCont={setCont} setNovaArray={setNovaArray} novaArray={novaArray} contadortrava={contadortrava} setContadorTrava={setContadorTrava} />

      </div>

    </div>
  );
}
