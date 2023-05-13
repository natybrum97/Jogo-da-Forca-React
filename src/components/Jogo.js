import React, { useState } from 'react';
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Jogo(props) {

    const { arrayLetras, setArrayLetras, novaArray, setNovaArray, letrasDesabilitadas, setLetrasDesabilitadas, cont, letra, setLetra, contadortrava, setContadorTrava } = props

    const [objetoSorteado, setObjetoSorteado] = useState('');

    function trocaPalavra() {

        setLetrasDesabilitadas([]);
        setContadorTrava(contadortrava + 1)
        alert(contadortrava);
        const indiceAleatorio = Math.floor(Math.random() * arrayLetras.length);
        const objetoSorteado = arrayLetras[indiceAleatorio];
        alert(objetoSorteado);

        setNovaArray(objetoSorteado.split(''));
        /*console.log(setNovaArray(objetoSorteado.split('')))*/
    }

    return (
        <div className='container2'>

            <img data-test="game-image" className='imagem0' src={forca0} />
            <img data-test="game-image" className={`imagem1 ${cont === 1 ? "" : "display"}`} src={forca1} />
            <img data-test="game-image" className={`imagem2 ${cont === 2 ? "" : "display"}`} src={forca2} />
            <img data-test="game-image" className={`imagem3 ${cont === 3 ? "" : "display"}`} src={forca3} />
            <img data-test="game-image" className={`imagem4 ${cont === 4 ? "" : "display"}`} src={forca4} />
            <img data-test="game-image" className={`imagem5 ${cont === 5 ? "" : "display"}`} src={forca5} />
            <img data-test="game-image" className={`imagem6 ${cont === 6 ? "" : "display"}`} src={forca6} />

            <div className='lateral'>
                <button data-test="choose-word" className='button' onClick={trocaPalavra}>Escolher Palavra</button>
                <div data-test="word"  className='word'>
                    {novaArray.map((letra, indice) => <Letras key={indice} virtualkey={letra} array={letrasDesabilitadas} cont={cont} novaArray={novaArray} objetoSorteado={objetoSorteado} />)}
                </div>
            </div>


        </div>
    )
}

function Letras(props) {
    
    return (
        <div className={props.cont < 6 ? "letraverde" : props.cont === 6 ? "letravermelha" : "letracolorida" } >{props.array.includes(props.virtualkey) ? props.virtualkey : "_"}</div>
    );
}
  