import "./Perfil.css";
interface propsPerfil {
    nome: string,
    avatar: string
}

const Perfil = ({ nome, avatar }: propsPerfil) => {
    return (
        <div>
            <img className="perfil-avatar" src={avatar} alt={`Foto de ${nome}`} />
            <h3 className="perfil-titulo">{nome}</h3>
        </div>
    )
};

export default Perfil;
