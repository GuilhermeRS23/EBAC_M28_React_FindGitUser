import Perfil from "../Perfil";

const Busca = () => {
    return (
        <section>
            <input type="text" placeholder="Pesquise um usuário do github..." />
            <button type="button">Buscar</button>

            <Perfil nome="Guilherme" username="guilhermers23" />
        </section>
    )
};

export default Busca;
