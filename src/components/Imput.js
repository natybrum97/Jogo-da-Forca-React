export default function Chute({jogoIniciado}) {

    return (
        <div className="englobainput">

            <p className="sabe">Já sei a palavra!</p>
            <input data-test="guess-input" className="escreve" disabled={!jogoIniciado ? true : false}></input>
            <button data-test="guess-button" className={!jogoIniciado ? "disabled1" : "chuta"} disabled={!jogoIniciado ? true : false}>Chutar</button>


        </div>
    )

}
