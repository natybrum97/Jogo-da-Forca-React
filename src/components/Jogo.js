import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Jogo(props) {

    const { arrayLetras, novaArray, setNovaArray, letrasDesabilitadas, setLetrasDesabilitadas, cont, setCont, setJogoIniciado, classe, setClasse, adivinhouPalavra, setAdivinhouPalavra} = props

    function trocaPalavra() {

        setAdivinhouPalavra(false);
        setLetrasDesabilitadas([]);
        setCont(0);
        setJogoIniciado(true);
        const indiceAleatorio = Math.floor(Math.random() * arrayLetras.length);
        const objetoSorteado = arrayLetras[indiceAleatorio];
        setNovaArray(objetoSorteado.split(''));
        /*console.log(setNovaArray(objetoSorteado.split('')))*/
    }

    const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    return (
        <div className='container2'>

            <img data-test="game-image" className='imagem0' src={forca[cont]} />

            <div className='lateral'>
                <button data-test="choose-word" className='button' onClick={trocaPalavra}>Escolher Palavra</button>
                <div data-test="word" className='word'>
                    <Letras array={letrasDesabilitadas} cont={cont} novaArray={novaArray} setJogoIniciado={setJogoIniciado} classe={classe} setClasse={setClasse} adivinhouPalavra={adivinhouPalavra} setAdivinhouPalavra={setAdivinhouPalavra} />
                </div>
            </div>


        </div>
    )
}

function Letras(props) {
    let palavramisteriosa = props.novaArray.map((letra) => { return props.array.includes(letra) ? letra : "_" })

    props.setClasse("");

    if (palavramisteriosa.join('') === props.novaArray.join('') || props.adivinhouPalavra) {
        props.setJogoIniciado(false);
        const outravar = "letraverde"
        props.setClasse(outravar)
        palavramisteriosa = props.novaArray;
    } else if (props.cont === 6) {
        props.setJogoIniciado(false);
        const outravar1 = "letravermelha"
        props.setClasse(outravar1)
        palavramisteriosa = props.novaArray;
    }

    console.log(props.classe)

    return (
        <div className={props.classe}>{palavramisteriosa.join(' ')}</div>
    );
}
