const RepoInfo = ({repo}) => {
    return (
        <li className="list-group-item" key={repo.id.toString()}>
            <div className="d-flex justify-content-between align-content-center">
                <div className="d-flex flex-column">
                    <a className="h5 mb-0 text-decoration-none" href={repo.url}>
                        {repo.name}
                    </a>
                    <p className="small">
                        {repo.description}
                    </p>
                </div>
                <span className="px-1 py-1 ms-1 d-inline-block btn btn-sm">
                    {repo.viewerSubscription}
                </span>
            </div>
        </li>
    );
};

export default RepoInfo;