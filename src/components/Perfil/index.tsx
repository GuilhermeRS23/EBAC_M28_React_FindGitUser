import styles from "./Perfil.module.css";

interface propsPerfil {
    username: string
}

const Perfil = ({ username }: propsPerfil) => {
    return (
        <div className={styles.header}>
            <div className={styles.perfil}>
                <img className={styles.avatar} src={`https://github.com/${username}.png`} alt={`Foto de ${username}`} />
                <h1 className={styles.nome}>{username}</h1>
            </div>
            <div>
                <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=7&theme=tokyonight&locale=pt-br`} alt="Linguagens" />
            </div>
        </div>
    )
};

export default Perfil;
