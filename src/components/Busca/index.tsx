import { useState } from "react";
import Perfil from "../Perfil";
import ReposList from "../ReposList";
import styles from "./Busca.module.css";

const Busca = () => {
    const [inputValue, setInputValue] = useState('');
    const [username, setUsername] = useState('');

    const buscarUsuario = () => {
        if (inputValue.length < 3) {
            return alert("Digite pelo menos 3 caracteres.")
        }
        setUsername(inputValue);
    };

    return (
        <section>
            <div className={styles.containerBusca}>
                <input className={styles.input} type="text" placeholder="Pesquise um usuário do github..."
                    onBlur={(e) => setInputValue(e.target.value)} />
                <button type="button" onClick={buscarUsuario}>Buscar</button>
            </div>

            {username.length > 3 &&
                <>
                    <Perfil username={username} />
                    <ReposList username={username} />
                </>
            }
        </section>
    )
};

export default Busca;
