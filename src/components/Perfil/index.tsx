import "./Perfil.css";

const Perfil = () => {
    const user = {
        nome: "Guilherme Rosa",
        avatar: "https://github.com/guilhermers23.png"
    };

    return (
        <div>
            <img className="perfil-avatar" src={user.avatar} alt={`Foto de ${user.nome}`} />
            <h3 className="perfil-titulo">{user.nome}</h3>
        </div>
    )
};

export default Perfil;
