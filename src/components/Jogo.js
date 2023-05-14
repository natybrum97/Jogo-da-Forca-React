import React, { useState } from 'react';
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Jogo(props) {

    const { arrayLetras, setArrayLetras, novaArray, setNovaArray, letrasDesabilitadas, setLetrasDesabilitadas, cont, setJogoIniciado} = props

    const [objetoSorteado, setObjetoSorteado] = useState('');

    function trocaPalavra() {

        setLetrasDesabilitadas([]);
        setJogoIniciado(true);
        const indiceAleatorio = Math.floor(Math.random() * arrayLetras.length);
        const objetoSorteado = arrayLetras[indiceAleatorio];
        alert(objetoSorteado);

        setNovaArray(objetoSorteado.split(''));
        /*console.log(setNovaArray(objetoSorteado.split('')))*/
    }

    const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    return (
        <div className='container2'>

            <img data-test="game-image" className='imagem0' src={forca[cont]} />

            <div className='lateral'>
                <button data-test="choose-word" className='button' onClick={trocaPalavra}>Escolher Palavra</button>
                <div data-test="word"  className='word'>
                   <Letras array={letrasDesabilitadas} cont={cont} novaArray={novaArray} objetoSorteado={objetoSorteado} setJogoIniciado={setJogoIniciado} />
                </div>
            </div>


        </div>
    )
}

// className={props.cont < 6 ? "letraverde" : props.cont === 6 ? "letravermelha" : "letracolorida" }

function Letras(props) {
    let palavramisteriosa = props.novaArray.map((letra) => {return props.array.includes(letra) ? letra : "_"} )
    console.log(props.cont)
    let classe = "";
    console.log(palavramisteriosa)
    console.log(props.novaArray)
    console.log(palavramisteriosa.join('') === props.novaArray.join(''))
    if(palavramisteriosa.join('') === props.novaArray.join('')) {
        props.setJogoIniciado(false);
    classe = "letraverde";
    } else if (props.cont === 6) {
        props.setJogoIniciado(false);
    classe = "letravermelha"
    palavramisteriosa = props.novaArray;
    } 
    
    return (
        <div className={classe}>{palavramisteriosa.join(' ')}</div>
    );
}
  