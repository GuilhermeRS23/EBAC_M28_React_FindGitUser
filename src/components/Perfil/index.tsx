import style from "./Perfil.module.css";
interface propsPerfil {
    nome: string,
    username: string
}

const Perfil = ({ nome, username }: propsPerfil) => {
    return (
        <header className={style.header}>
            <img className={style.avatar} src={`https://github.com/${username}.png`} alt={`Foto de ${nome}`} />
            <h1 className={style.name}>{nome}</h1>
        </header>
    )
};

export default Perfil;
