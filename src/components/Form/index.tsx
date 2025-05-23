import { useState } from "react";

const Form = () => {
    const [nome, setNome] = useState('');
    const [notaA, setNotaA] = useState(0);
    const [notaB, setNotaB] = useState(0);
    const [notaC, setNotaC] = useState(0);

    const resultado = () => {
        const soma = notaA + notaB + notaC;
        const media = soma / 3;

        if (media >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    };

    return (
        <>
            <form>
                <label htmlFor="nome">Seu Nome</label>
                <input id="nome" type="text" placeholder="Seu Nome" onChange={e => setNome(e.target.value)} />
                <label htmlFor="front">Nota Front-End</label>
                <input id="front" type="number" placeholder="Nota do Front-End" min={0} max={10} onChange={e => setNotaA(parseInt(e.target.value))} />
                <label htmlFor="back">Nota Back-End</label>
                <input id="back" type="number" placeholder="Nota do Back-End" min={0} max={10} onChange={e => setNotaB(parseInt(e.target.value))} />
                <label htmlFor="python">Nota Python</label>
                <input id="python" type="number" placeholder="Nota do Python" min={0} max={10} onChange={e => setNotaC(parseInt(e.target.value))} />
            </form>
            <p>Olá {nome}, você foi {resultado()}.</p>
        </>
    )
}

export default Form;
