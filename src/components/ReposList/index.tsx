import { useEffect, useState } from "react";

interface DadosAPI {
    id: string,
    name: string,
    description: string,
    language: string,
    html_url: string,
}

const ReposList = () => {
    const [repos, setRepos] = useState<DadosAPI[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/guilhermers23/repos")
            .then(res => res.json())
            .then(response => (
                setLoading(false),
                setRepos(response)));
    }, []);
    return (
        <>
            <h3>Repositorios</h3>
            {loading &&
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="list-group">
                {repos.map(item => (
                    <a href={item.html_url} target="_blank" className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Nome: {item.name}</h5>
                            <small>{item.language}</small>
                        </div>
                        <p className="mb-1">{item.description}</p>
                    </a>
                ))}
            </div>
        </>
    )
}

export default ReposList;
