import { useEffect, useState } from "react";
import styles from "./ReposLis.module.css";

interface DadosAPI {
    id: string,
    name: string,
    language: string,
    html_url: string,
}

const ReposList = ({ username }: { username: string }) => {
    const [repos, setRepos] = useState<DadosAPI[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`);
                const response = await res.json();
                setRepos(response);
            } catch (error) {
                // Lidar com erros, por exemplo, exibir uma mensagem para o usuário
                console.error("Erro ao buscar repositórios:", error);
            } finally {
                setLoading(false); // Certifique-se de que o loading é sempre definido como false
            }
        };
        fetchData();
    }, [username]);

    return (
        <div className="container">
            <h3>Repositorios</h3>
            {loading &&
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b>
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b>
                            {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList;
